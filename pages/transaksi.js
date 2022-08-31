import { useRouter } from 'next/router'
import Input from '../components/form/Input'

function Transaksi() {
  const router = useRouter()
  return (
    <div className="w-full flex flex-col justify-center min-h-screen items-center gap-3">
      <div className='px-6 w-full flex'>
        <Input label="percobaan" />
      </div>
      <button className="w-48 py-2 bg-yellow-600 text-white" onClick={() => router.push('/')}>Back</button>
    </div>
  )
}

export default Transaksi