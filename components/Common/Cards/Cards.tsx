import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const MotionStack=motion(VStack)
const Cards = ({item}:{item:any}) => {
  return (
    <MotionStack cursor={"pointer"} borderRadius={"xl"} boxShadow="md" borderTop={"1px solid"} borderTopColor="blackAlpha.300" h="100%" w="100%"
    whileHover={{
        scale:"1.05",
        boxShadow:"xl",
        border:"1px solid black",
        borderRadius:"5px"

    }}
    >
        <Image borderTopRadius={"xl"} src={item.image} w="100%" h={"500px"} objectFit="fill" />
        <Box w="100%" p={4}>
            <Flex justify={"space-between"} w="100%" mb="2" gap={2}>
                <Text fontSize={"20px"} fontWeight="900" _hover={{
                    fontSize:"22px",
                    textColor:"blackAlpha.600"
                }}>{item.title}</Text>
                <Text fontWeight={"bold"} fontSize="md">Ratings: {item.rating}</Text>
            </Flex>
            <Text fontWeight={"800"}>Genre </Text>
        </Box>
    </MotionStack>
  )
}

export default Cards