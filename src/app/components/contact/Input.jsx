export default function Input({id, name, plceholder, type}) {
    return (
      <input
        id={id}
        name={name}
        placeholder={plceholder}
        type={type}
        className='bg-zinc-900 border-b focus:outline-none w-10/12 border-white  placeholder:text-gray-500  uppercase'
      />
    )
  }