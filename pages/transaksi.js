import { useRouter } from 'next/router'
import EmailInput from '../components/form/emailInput'
import Input from '../components/form/Input'
import PhoneInput from '../components/form/PhoneInput.js'

function Transaksi() {
  const router = useRouter()
  let data = {
    nama: '',
    email: '',
    notelp: ''
  }
  const parentHandleChange = (e) => {
    data.nama = e.target.value
  }
  const changeNoTelp = (val) => {
    data.notelp = val
  }
  const changeEmail = (val) => {
    data.email = val
  }
  return (
    <div className="w-full flex flex-col justify-center min-h-screen items-center gap-3">
      <div className='px-6 w-full flex flex-col gap-2'>
        <Input label="percobaan" value={data.nama} handleChange={parentHandleChange} />
        <PhoneInput label="No Hp" value={data.notelp} handleChange={changeNoTelp} />
        <EmailInput label="Email" value={data.email} handleChange={changeEmail} />
      </div>
      <button className="w-48 py-2 bg-yellow-600 text-white" onClick={() => router.push('/')}>Back</button>
    </div>
  )
}

export default Transaksi