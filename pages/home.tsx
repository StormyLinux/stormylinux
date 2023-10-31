import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <>
    <div><Link href="/home">Home</Link><Link href="/about">About</Link><Link href="/">Documentation</Link></div>
    </>
  )
}

export default Home