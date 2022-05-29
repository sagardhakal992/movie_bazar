import { Center, Grid, GridItem, Spinner, Text } from '@chakra-ui/react'
import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Cards from '../../components/Common/Cards';
import { setPosts } from '../../services/api/movieSlice';
import { fetchMovies } from '../../services/axios/fetchMovies';
import { useAppDispatch, useAppSelector } from '../../services/strores/hooks';



const Category = () => {
    const router=useRouter();
    const category=router.query.category;
    const dispatch=useAppDispatch()
    const {data,isError,error,isSuccess}=useQuery(`movies/${category}`,()=>fetchMovies("movies"))
    const movieList=useAppSelector((state)=>state.movies);
    useEffect(()=>{
        if(isSuccess)
        {
          
            if(!movieList.posts)
            {
              dispatch(setPosts(data))
            toast.success("data fetched success fully");
            }
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
        {movieList && movieList.posts?.map((item:any,index:number)=>{
            return (
                <GridItem key={index}>
            <Cards item={item} />
        </GridItem>
            );
        })}
        {!movieList.posts && <Center position={"absolute"} top="50%" right={"50%"}   >
            <Spinner />
            </Center>}
    </Grid>
  )
}

export default Category