'use client' //used when using a state or any react hook which only work in client side 
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
   let params= useParams()
  return (
    <div>
        <h1> {params.courseId} course</h1>
    </div>
    )}
export default page