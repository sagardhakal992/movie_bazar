import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const DetailPage = () => {
    const router=useRouter();
    const id=router.query.id;
    useEffect(()=>{
        console.log("hello")
    },[id]);
  return (
    <div>DetailPage</div>
  )
}

export default DetailPage