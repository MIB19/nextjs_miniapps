import { useRouter } from 'next/router'

function Nav(props) {
  const router = useRouter()
  const path = router.asPath
  if (path === '/') {
    return <></>
  } else {
    return (
      <div className="fixed top-0 inset-x-0 w-full flex flex-row items-center px-4 bg-TMR-80 h-16">
        <label className='text-TMR-20 text-xl font-semibold'>Ternaknesia MiniApps</label>
      </div>
    )
  }
}

export default Nav