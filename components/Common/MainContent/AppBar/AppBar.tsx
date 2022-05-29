import { Flex, Text,Box,Input,InputGroup, InputLeftElement, Stack, Select } from '@chakra-ui/react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import {BiSearch} from 'react-icons/bi';
import { useQuery } from 'react-query';
import { getGenre } from '../../../../services/axios/fetchMovies';
import MySelect from '../../Select';


const NavBarLikns=({name}:{name:string})=>{
    const router=useRouter();
    return (
        <Link  href={`/category/${name}`}>
                <a>
                <Text cursor={"pointer"} textColor="blackAlpha.700" fontWeight={router.query?.category==name?"700":"600"} textShadow="xl" fontSize={router.query?.category==name ? "lg":"md"}
                _hover={{
                    fontSize:"lg",
                    fontWeight:"500",
                    mx:"4",
                    textColor:"blackAlpha.800"
                }}
            
                >{name.toUpperCase()}</Text>
                </a>
                
         </Link>
    );
}


const navbarLinks=[
    "films",
    "social",
    "videos",
    "news",
    "about"
];

const AppBar = () => {
    const router=useRouter();
    
    
  return (
      <Stack w="100%" gap={8}>
    <Flex  w="100%" justify="space-between">
        <Box >
            <InputGroup>
            <InputLeftElement fontSize={"1.2rem"} >
            <BiSearch style={{height:"50px"}} />
            </InputLeftElement>
            <Input 
            variant={"flushed"}
            placeholder="Find Whatever You want"
            fontWeight={"600"}
            textColor="blackAlpha.200" 
            w="400px"
            />
            </InputGroup>
        </Box>
        <Flex gap={4}>
            {navbarLinks.map((item,index)=><NavBarLikns key={index} name={item}/>)}
        </Flex>
    </Flex>

    { <Flex justify={"space-between"} py="4">
        <Box>
            <Text fontSize={"2xl"} fontWeight="700">All Films</Text>
        </Box>
        <Flex gap="20">
            <MySelect />
            
        </Flex>
    </Flex>}
    </Stack>
  )
}

export default AppBar