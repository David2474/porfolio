import React from 'react'

export default function TecnoList() {
    const tecnologies = [
        {
            id: 1,
            tencologie: "Html",
            experience: "2 Años de Experiencia"
        },
        {
            id: 2,
            tencologie: "React",
            experience: "2 Años de Experiencia"
        },
        {
            id: 3,
            tencologie: "Git",
            experience: "2 Años de Experiencia"
        },
        {
            id: 4,
            tencologie: "Tailwind",
            experience: "1 Año de Experiencia", 
        },
        {
            id: 5,
            tencologie: "Next.js",
            experience: "1 Año de Experiencia"
        },
        {
            id: 6,
            tencologie: "Sql",
            experience: "1 Año de Experiencia"
        },
        {
            id: 7,
            tencologie: "JavaScript",
            experience: "2 Año de Experiencia"
        },
    ]
  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 my-6 place-items-center'>
        {tecnologies.map((tecno) => {
            return(
                <div key={tecno.id} 
                className='my-3 sm:w-full w-2/4 flex justify-center items-center flex-col'>     
                    <p className='text-2xl font-semibold'>{tecno.tencologie}</p>
                    <p className='text-gray-300'>{tecno.experience}</p>   
                </div>   
            )
        })}
    </div>
  )
}
