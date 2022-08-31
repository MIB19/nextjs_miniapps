import Input from 'react-phone-number-input/input'

function PhoneInput(props) {
  return (
    <div className='w-full flex flex-col items-start mt-2 gap-1'>
      <label>{props.label}</label>
      <Input
        country="ID"
        international
        withCountryCallingCode
        className="border-b border-gray-300 w-full focus:border-ternaknesia focus:outline-none py-1.5"
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  )
}

export default PhoneInput