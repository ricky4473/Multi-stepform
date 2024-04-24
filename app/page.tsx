'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
    const router=useRouter()
    router.push('/1')
  return (
    <></>
  )
}

export default Home
