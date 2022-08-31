function Input({ label }) {
  return (
    <div className='w-full flex flex-col gap-2 mt-2'>
      <label>{label}</label>
      <input
        className='border-b py-1.5 px-2 border-gray-600 focus:border-b-2 focus:border-ternaknesia focus:outline-0 focus:border-t-0 focus:border-l-0'
        placeholder='percobaan'
      />
    </div>
  )
}

export default Input