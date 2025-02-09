'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import { Stack, Typography, Button, Modal, TextField } from '@mui/material';
import { firestore } from '@/firebase';
import { collection, doc, getDocs, query, setDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  gap: 3,
  display: 'flex',
  flexDirection: 'column',
};

export default function Home() {
  const [pantry, setPantry] = useState([])
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [itemName, setItemName] = useState('')

  const updatepantry = async () => {
    const snapshot = query(collection(firestore, 'pantry'))
    const docs =  await getDocs(snapshot)
    const pantrylist = []
    docs.forEach((doc) => {
      pantrylist.push({name: doc.id, ...doc.data()})
    })

    console.log(pantrylist)
    setPantry(pantrylist)
  }

  useEffect(() => {
    updatepantry()
  }, [])
  const addItem = async (item) => {
    const docRef = doc(collection(firestore, 'pantry'), item)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const count = docSnap.data().count + 1
      await setDoc(docRef, {count})
    } 
    else{
    await setDoc(docRef, {count: 1})
    }
    await updatepantry()
  }
  const revmoveItem = async (item) => {
    const docRef = doc(collection(firestore, 'pantry'), item)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists())
    {
      const {count} = docSnap.data()
      if (count === 1) {
      await deleteDoc(docRef)
      }
      else{
      await setDoc(docRef, {count: count - 1})
      }
    }
    await updatepantry()
  }
  return (
  <Box
    width="100vw"
    height="100vh"
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    flexDirection={'column'}
    gap={2}
  >
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add an Item
        </Typography>
        <Stack width="100%" direction={'row'} spacing={2}>
          <TextField 
            id='outlinig-basic' 
            label="Item" 
            variants="outlined" 
            fullWidth 
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <Button variant="outlined" 
            onClick={() => {
              addItem(itemName)
              setItemName('') 
              handleClose()
            }}
          >Add</Button>
        </Stack>
      </Box>
    </Modal>
    <Button variant="contained" onClick={handleOpen}>ADD</Button>
    <Box border={'1px solid #333'}>
      <Box 
        width={"800px"} 
        height={"100px"} 
        bgcolor={"#ADD8E6"} 
        display={'flex'} 
        justifyContent={'center'} 
        alignItems={'center'} 
        >
          <Typography variant='h2' color={'#333'} textAlign={'center'}>
            Pantry Items
          </Typography>
        </Box>
        <Stack width={"800px"} height={"300px"} spacing={2} overflow={'auto'}>
            {pantry.map(({name, count}) => (
            <Box
              key={name}
              width={"100%"}
              minHeight={"150px"}
              display={'flex'}
              justifyContent={'space-between'}
              paddingX={5}
              alignItems={'center'}
              bgcolor={"#f5f5f5"}
              borderRadius={2}
            >
              <Typography 
              variant={"h4"}
              color={'#333'}
              textAlign={'center'}
              >
              {name.charAt(0).toUpperCase() + name.slice(1)}
              </Typography>
              <Typography variant={'h5'} color={'#333'} textAlign={'center'}>
                Quantity: {count}
              </Typography>
            <Button variant="contained" onClick={() => revmoveItem(name)}>Remove</Button>
            </Box>
          ))}
        </Stack>
      </Box>
  </Box>
  );
}
