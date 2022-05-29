import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const MotionStack=motion(VStack)
const Cards = ({item}:{item:any}) => {
  return (
    <Link href={`/detail/${item.id}`}>
    <MotionStack cursor={"pointer"} borderRadius={"xl"} boxShadow="md" borderTop={"1px solid"} borderTopColor="blackAlpha.300" h="100%" w="100%"
    whileHover={{
        scale:"1.05",
        boxShadow:"xl",
        border:"1px solid black",
        borderRadius:"5px"

    }}
    >
        <Image borderTopRadius={"xl"} src={item['medium_cover_image'] } w="100%" h={"500px"} objectFit="fill" />
        <Box w="100%" p={4}>
            <Flex justify={"space-between"} w="100%" mb="2" gap={2}>
                <Text fontSize={"20px"} fontWeight="900" _hover={{
                    fontSize:"22px",
                    textColor:"blackAlpha.600"
                }}>{item.title}</Text>
                <Text fontWeight={"bold"} fontSize="md">Ratings: {item.rating}</Text>
            </Flex>
            <Flex px={2} justify="start" gap={4}>
                {item.genres.map((item:string,index:number)=>{
                    return <Text key={index} border="1px solid gray" p={1} borderRadius="md" fontWeight={"800"} boxShadow="md">{item}</Text>
                })}
            </Flex>
        </Box>
    </MotionStack>
    </Link>
  )
}

export default Cards