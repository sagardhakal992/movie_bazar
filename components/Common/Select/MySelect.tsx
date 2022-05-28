import { useEffect, useState } from 'react'
import { Listbox } from '@headlessui/react'
import { Select } from '@chakra-ui/react'

const people = [
 "sagar",
 "suraz",
 "abinash"
]

function MySelect() {
  return (
    <Select placeholder='Genre'>
      
        {people && people.map((person:string,index:number) => (
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