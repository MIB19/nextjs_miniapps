import { useRouter } from 'next/router'

function Nav(props) {
  const router = useRouter()
  const path = router.asPath
  if (path === '/') {
    return <></>
  } else {
    return (
      <div className="fixed top-0 right-x-0 w-full bg-gray-100 h-16"></div>
    )
  }
}

export default Nav