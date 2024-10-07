import React from 'react'
import { BriefcaseIcon } from 'lucide-react'

const experiences = [
  {
    company: "Tech Innovators Inc.",
    position: "Desarrollador Full Stack Senior",
    date: "Enero 2020 - Presente",
    description: "Lideré el desarrollo de una plataforma de e-learning utilizando React y Node.js. Implementé una arquitectura de microservicios que mejoró la escalabilidad del sistema en un 40%.",
    achievements: [
      "Reduje el tiempo de carga de la aplicación en un 30% mediante la optimización del rendimiento del front-end.",
      "Implementé un sistema de autenticación basado en JWT que aumentó la seguridad de la plataforma.",
      "Mentoré a 5 desarrolladores junior, mejorando la productividad del equipo en un 25%."
    ]
  },
  {
    company: "Tech Innovators Inc.",
    position: "Desarrollador Full Stack Senior",
    date: "Enero 2020 - Presente",
    description: "Lideré el desarrollo de una plataforma de e-learning utilizando React y Node.js. Implementé una arquitectura de microservicios que mejoró la escalabilidad del sistema en un 40%.",
    achievements: [
      "Reduje el tiempo de carga de la aplicación en un 30% mediante la optimización del rendimiento del front-end.",
      "Implementé un sistema de autenticación basado en JWT que aumentó la seguridad de la plataforma.",
      "Mentoré a 5 desarrolladores junior, mejorando la productividad del equipo en un 25%."
    ]
  },
  {
    company: "Tech Innovators Inc.",
    position: "Desarrollador Full Stack Senior",
    date: "Enero 2020 - Presente",
    description: "Lideré el desarrollo de una plataforma de e-learning utilizando React y Node.js. Implementé una arquitectura de microservicios que mejoró la escalabilidad del sistema en un 40%.",
    achievements: [
      "Reduje el tiempo de carga de la aplicación en un 30% mediante la optimización del rendimiento del front-end.",
      "Implementé un sistema de autenticación basado en JWT que aumentó la seguridad de la plataforma.",
      "Mentoré a 5 desarrolladores junior, mejorando la productividad del equipo en un 25%."
    ]
  },
  {
    company: "DataDrive Solutions",
    position: "Desarrollador Back-end",
    date: "Marzo 2018 - Diciembre 2019",
    description: "Desarrollé APIs RESTful para una aplicación de análisis de datos utilizando Python y Django. Trabajé en la integración de servicios de machine learning para el procesamiento de datos en tiempo real.",
    achievements: [
      "Optimicé las consultas a la base de datos, reduciendo el tiempo de respuesta de la API en un 50%.",
      "Implementé tests automatizados que aumentaron la cobertura de código del 60% al 90%.",
      "Colaboré en el diseño e implementación de una arquitectura serverless que redujo los costos de infraestructura en un 35%."
    ]
  }
]

export default function TimeLineItem() {
  return (
    <div className='max-w-4xl mx-auto p-4 border border-red-500 bg-zinc-900 text-zinc-100'>
      {
        <div className="relative border-l border-zinc-700 ml-3">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-zinc-700 rounded-full -left-3 ring-8 ring-zinc-900">
                <BriefcaseIcon className="w-4 h-4 text-zinc-300" />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-zinc-100">{exp.position}</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-zinc-500">{exp.date}</time>
              <p className="mb-4 text-base font-normal text-zinc-300">{exp.description}</p>
            </div>
          ))}
        </div>
      }
    </div>
  )
}
