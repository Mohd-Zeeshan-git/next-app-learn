import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/product">Product</Link>
        <Link href="/course">Courses</Link>
    </div>
  )
  
}

export default NavBar