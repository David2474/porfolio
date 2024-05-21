import React from 'react'
import Image from 'next/image'

export default function CardProyect() {

    const proyectList = [
        {
          id: 1,
          url: "/proyects/calcular-edad.png",
          name: "Calcular Edad",
          tecnologies: {
            1: "javascript",
            2: "Css",
          },
          github: "https://github.com/David2474/calcularEadad"
        },
        {
          id: 2,
          url: "/proyects/list-app.png",
          name: "To do List",
          tecnologies: {
            1: "javascript",
            2: "Tailwind",
          },
          github: "https://github.com/David2474/listadeTareas"
        },
        {
          id: 3,
          url: "/proyects/tienda.png",
          name: "E-commerce ",
          tecnologies: {
            1: "javascript",
            2: "Css",
          },
          github: "https://github.com/David2474/Nissosi"
        },
        {
          id: 4,
          url: "/proyects/sumaryResult.png",
          name: "proyect name",
          tecnologies: {
            1: "React",
            2: "Tailwind",
          },
          github: "https://github.com/David2474/resultsComponent"
        },
        {
          id: 5,
          url: "/proyects/apiPeli.png",
          name: "proyect name",
          tecnologies: {
            1: "React",
            2: "Tailwind",
          },
          github: "https://github.com/David2474/resultsComponent"
        },
        {
          id: 6,
          url: "/proyects/sumaryResult.png",
          name: "proyect name",
          tecnologies: {
            1: "React",
            2: "Tailwind",
          },
          github: "https://github.com/David2474/resultsComponent"
        },
      ]

  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 place-content-between place-items-center my-9'>
        {proyectList.map(proyect =>{
            return(
            <div key={proyect.url} className='uppercase w-full sm:w-[90%] mx-2 h-96 sm:h-[420px] my-6'>
              <div className='w-full h-3/4'>
                <Image
                  alt="project image"
                  width={350}
                  height={300}
                  className="w-full h-full"
                  src={proyect.url}
                />
              </div>
              <div className='my2'>
                <div>
                  <p className='text-xl mt-2'>{proyect.name}</p>
                </div>
                <div className='flex text-gray-500'>
                  <p className='text-neutral-400 my-1'>{proyect.tecnologies[1]}</p>
                  <p className='mx-2 text-neutral-400 my-1'>{proyect.tecnologies[2]}</p>
                </div>
              </div>
              <div>
                <a href={proyect.github} className='border-b-2 border-green-600 uppercase'>Ver codigo</a>
              </div>
            </div>
            )
        })}
    </div>
  )
}
