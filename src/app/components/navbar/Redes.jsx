import Image from 'next/image'
import React from 'react'



export default function Redes() {

    const redes = [
        {
            id: 1,
            image: "/redes/github.png",
            url: "https://github.com/David2474"
        },
        {
            id: 2,
            image: "/redes/linkedin.png",
            url: ""
        },
    ]

  return (
    <div className='flex justify-center sm:my-0 my-1'>
        {redes.map(red => (
            <a 
                key={red.id} 
                href={red.url} 
                className='mx-1 sm:mx-2 flex justify-center items-center'>
                    <Image 
                        width={25} 
                        height={25} 
                        src={red.image} 
                        alt='image redes'
                    />
            </a>
        ))}
    </div>
  )
}
