import React from 'react'
import Image from 'next/image'

export default function ImageProfile() {
  return (
    <div className="items-center flex sm:w-1/3 w-44 h-72 mt-6 justify-center">
        <Image 
        className="sm:w-10/12 h-[90%] w-full"
        src={'/image-profile/profile.jpg'}
        width={300}
        height={400}
        alt='image profile'
        />
        
    </div>
  )
}
