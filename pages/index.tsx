import { Box, Center, Heading, Spinner } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home: NextPage = () => {
  const router=useRouter();
  useEffect(()=>{
    router.replace('/category/films');
  },[]);
  return (
    <div >
      <Head>
        <title>My Movie App</title>
        <meta name="description" content="Movie app that provides detail of movie" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center>
        <Spinner></Spinner>
      </Center>
    </div>
  )
}

export default Home
