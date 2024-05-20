import React from 'react'
import { Chivo } from "next/font/google";

const chivo = Chivo({ subsets: ["latin"], weight: '400', });

export default function Aboutme() {
  return (
    <div className="flex flex-col w-3/4 justify-center items-center my-6">
      <p className="font-bold text-xl sm:text-2xl">
        Hola, soy {" "}
        <span className="border-b-[3px] border-green-400">David Gutierrez</span>
      </p>
      <p className='sm:w-11/12 w-full font-[chivo] text-xl text-gray-300'>
        Soy un desarrollador de software con más de un año de experiencia,
        mi pasión por resolver problemas y mi
        curiosidad insaciable me impulsan a aprender constantemente, buscando
        siempre las soluciones más efectivas.
      </p>
    </div>
  );
}
