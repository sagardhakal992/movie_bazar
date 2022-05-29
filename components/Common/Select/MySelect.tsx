import { useEffect, useState } from 'react'
import { Listbox } from '@headlessui/react'
import { Select } from '@chakra-ui/react'
import { useQueries, useQuery } from 'react-query'
import { fetchMovies, getGenre } from '../../../services/axios/fetchMovies'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../../../services/strores/hooks'
import { emptyState, setPosts } from '../../../services/api/movieSlice'

const people = [
 "Movie",
 "tv_show"
]

function MySelect() {
  const dispatch=useAppDispatch()
  return (
    <Select placeholder='Movie' onChange={async(e:any)=>{
      dispatch(emptyState(""))
      fetchMovies(e.target.value).then((data)=>{
        dispatch(setPosts(data));
      }).catch((e)=>{
        
        toast.error("err");
      })
      
    }}>
      
        {people.map((person:string,index:number) => (
          <option
          key={index}
            value={person}
          >
            {person}
        </option>
        ))}
     
    </Select>
  )
}
 
export default MySelect;