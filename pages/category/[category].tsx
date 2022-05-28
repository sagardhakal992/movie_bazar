import { Center, Grid, GridItem, Spinner, Text } from '@chakra-ui/react'
import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Cards from '../../components/Common/Cards';
import { setPosts } from '../../services/api/movieSlice';
import { useAppDispatch } from '../../services/strores/hooks';

const fetchMovies=async(genre:any)=>{
    try{
        const options = {
            method: 'GET',
            url: 'https://movies-app1.p.rapidapi.com/api/movies?genre=action',
            headers: {
              'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
              'X-RapidAPI-Key': '81036bf205msh6d724b7bdaa8bc8p109afcjsn7a14a8e848ee'
            }
          };
        const res=await axios.request(options);
        const data=await res.data;
        return data;
    }
    catch(err)
    {
        throw new Error("something went wrong");
    }
}

const Category = () => {
    const router=useRouter();
    const category=router.query.category;
    const dispatch=useAppDispatch()
    const {data,isError,error,isSuccess}=useQuery(`movies/${category}`,()=>fetchMovies(category))
    useEffect(()=>{
        if(isSuccess)
        {
            dispatch(setPosts(data))
            toast.success("data fetched success fully");
        }
        if(error)
        {
            toast.error("something went wrong")
        }
    },[data,error])
  return (
    <Grid position={"relative"} gap={12} templateColumns={"repeat(4,1fr)"} h="100%" w="100%" placeContent={"center"} overflowX="hidden"
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
        {data && data.results.map((item:any)=>{
            return (
                <GridItem key={item._id}>
            <Cards item={item} />
        </GridItem>
            );
        })}
        {!data && <Center position={"absolute"} top="50%" right={"50%"}   >
            <Spinner />
            </Center>}
    </Grid>
  )
}

export default Category