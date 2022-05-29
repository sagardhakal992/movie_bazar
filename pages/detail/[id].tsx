import { Box, Center, HStack, Image, Spinner, Stack, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { is } from 'immer/dist/internal';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { fetchDetailMovie } from '../../services/axios/fetchMovies';

const ImageMotion=motion(Image)
const DetailPage = () => {
    const router=useRouter();
    const id=router.query.id;
    const {data,isError,isLoading,isSuccess}=useQuery(`detail/${id}`,()=>fetchDetailMovie(id))
    useEffect(()=>{
       if(isError){
         toast.error("error occured");

       }
       if(isSuccess)
       {
         toast.success("Success ");
       }
    },[isLoading]);
  return (
    <>{data &&
      <HStack h="100%" w="100%" bgGradient='linear(to-br, black, blackAlpha.500)' gap={4}>
         <Box h="100%" w="40%"  borderRadius={"xl"} boxShadow="xl">
          <ImageMotion initial={{
            width:"80%"
          }} 
          animate={{
            width:"100%"
          }}
          src={data.data.movie.medium_cover_image} h="100%" w="100%" objectFit={"fill"} borderRadius={"xl"} boxShadow="xl" />
        </Box>
        <VStack h="100%" w="100%" align={"start"} py={4}>
          <Text fontSize={"3xl"} fontWeight="bolder" textColor="whiteAlpha.800">{data.data.movie.title}</Text>
        </VStack>
      </HStack>}
      {!data && <HStack h="100%" w="100%" bgGradient='linear(to-br, black, blackAlpha.500)'>
         <Center h="100%" w="100%" >
           <Spinner color='white' />
         </Center>
      </HStack>}
      </>
  )
}

export default DetailPage