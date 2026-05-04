import Link from 'next/link'
import React from 'react'
function page() {
  return (
    <>
       <h1>product Page</h1>
       <p> <Link href="product/men">Men's Product </Link>
       <Link href="product/women">Women's Product </Link>
       </p>
    </>
  )}
export default page