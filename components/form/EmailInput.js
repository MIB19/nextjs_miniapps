function EmailInput(props) {
  return (
    <div className='w-full flex flex-col gap-1 mt-2'>
      <label>{props.label}</label>
      <input
        type={props.type ? props.type : 'email'}
        className='border-b py-1.5 px-2 border-gray-300 caret-ternaknesia placeholder:text-gray-300 focus:border-b focus:border-ternaknesia focus:outline-0 focus:border-t-0 focus:border-l-0'
        placeholder={props.label ? props.label : ''}
        defaultValue={props.value}
        onChange={props.handleChange}
      />
    </div>
  )
}
export default EmailInput