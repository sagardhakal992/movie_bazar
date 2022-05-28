import React from 'react'
import { motion } from 'framer-motion'
import { Box, Text, VStack } from '@chakra-ui/react'
const MotionVstack=motion(VStack);


const LeftSidebar = ({isOpen,toggleSideBar}:{isOpen:boolean,toggleSideBar:Function}) => {

  return (
    <MotionVstack

    initial={{
        
        opacity:0.5,
        width:20
    }}
    animate={{
        left:0,
        opacity:1,
        width:isOpen?300:80
    }}

    h="100%"
   
    position={{base:"fixed",md:"relative"}}
    top={0}
    right="20"
    left={0}
    bottom={0}
    bg="#2700FF"
    p={2}

    onClick={toggleSideBar}
    >
      <Box py={8} borderBottom="1px solid white" w="100%" textAlign={"center"}>
        <Text textColor={"white"} fontSize="3xl" fontFamily="sans-serif" fontWeight={"400"} textShadow="lg">
          {isOpen?"MovieBazar":"MB"}
        </Text>
      </Box>
    </MotionVstack>
  )
}

export default LeftSidebar