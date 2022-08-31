import { useRouter } from 'next/router'
function Home({posts}) {
  const router = useRouter()
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center bg-yellow-200'>
      <label>Aku nyobak</label>
      <label>{posts.name}</label>
      <button className="py-2 w-60 rounded-full bg-yellow-600 text-white" onClick={() => router.push('/transaksi')}>to Transaksi</button>
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://chain-api.ternaknesia.com/')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Home
