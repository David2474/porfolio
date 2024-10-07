'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Input from './Input';

function ContactForm() {
  const [state, handleSubmit] = useForm("xleqvkvk");

  if (state.succeeded) {
    return <p className="text-green-500 text-2xl">Gracias por contactarte!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className='flex border w-10/12 mt-4 flex-col self-center justify-center items-center'>
      <label htmlFor="email" className="mt-6 items-center w-9/12 uppercase font-medium text-neutral-200">
        Nombre
      </label>
        <Input
          id="name"
          type="text" 
          name="name"
          required
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />


        <label htmlFor="email" className="items-center w-9/12 mt-6 uppercase font-medium text-neutral-200">
          Correo
        </label>
        <Input
          id="email"
          type="email" 
          name="email"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
           
      
        <label htmlFor="message" className="mt-6 items-center w-9/12 uppercase font-medium text-neutral-200">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="bg-zinc-900 border-b focus:outline-none w-[85%]  placeholder:text-gray-500 uppercase"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      
      
      <div className='w-[85%] my-6 flex justify-end'>
        <button type="submit" disabled={state.submitting} className="border-b-2 uppercase border-green-600">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
