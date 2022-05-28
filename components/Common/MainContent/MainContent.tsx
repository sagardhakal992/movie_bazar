import React from 'react'
import AppBar from './AppBar'
import { motion } from 'framer-motion';
import { Box, VStack } from '@chakra-ui/react'  

const MotionVstack=motion(VStack);
const MainContent = (props:any) => {
  return (
    <MotionVstack
    h="100%" w="100%"
    p={12} >
      <AppBar />
      <Box h="100%" w="100%" overflowY={"scroll"}
       css={{
        '&::-webkit-scrollbar': {
          width: '0px',
        },
        '&::-webkit-scrollbar-track': {
          width: '0px',
        },
        '&::-webkit-scrollbar-thumb': {
          background:"gray",
          borderRadius: '2',
        },
      }}
      
      >
        {props.children}
      </Box>
    </MotionVstack>
  )
}

export default MainContent