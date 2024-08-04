import * as React from 'react';
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';

const items = ['apple',
  'banana',
  'orange',
  'grapefruit',
  'grapes',
  'strawberries',
  'blueberries',
  'raspberries',
  'blackberries',
  'peach',
  'nectarine',
  'plum',
  'pear',
  'kiwi',
  'mango',
  'pineapple',
  'watermelon',
  'cantaloupe',
  'tomato',
  'potato',
  'onion',
  'garlic',
  'ginger',
  'carrot',
  'celery',
  'cucumber',
  'bell pepper',
  'broccoli',
  'cauliflower',
  'asparagus',
  'lettuce',
  'spinach',
  'kale',
  'arugula',
  'cabbage',
  'zucchini',
  'squash',
  'pumpkin',
  'sweet potato',
  'corn']


export default function Home() {
  return (
  <Box
    width="100vw"
    height="100vh"
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    flexDirection={'column'}
  >
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
      <Stack width={"800px"} height={"160px"} spacing={2} overflow={'auto'}>
        {items.map((item) => (
          <Box
            key={item}
            width={"100%"}
            height={"300px"}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            bgcolor={"#f5f5f5"}
            borderRadius={2}
          >
            <Typography 
            variant={"h4"}
            color={'#333'}
            textAlign={'center'}
            >
            {item.charAt(0).toUpperCase() + item.slice(1)}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  </Box>
  );
}
