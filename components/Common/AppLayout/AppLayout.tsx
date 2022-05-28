import { Box, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import LeftSidebar from '../LeftSidebar'
import MainContent from '../MainContent'
const AppLayout = (props:any) => {
    const [isOpen, setOpen] = React.useState(true)

    const toggleSidebar=()=>{
        setOpen(!isOpen);
    }
  return (
    <Flex h="100vh" w="100%" >
        <LeftSidebar isOpen={isOpen} toggleSideBar={toggleSidebar} />
        <MainContent>
            {props.children}
        </MainContent>
      </Flex>
  )
}

export default AppLayout