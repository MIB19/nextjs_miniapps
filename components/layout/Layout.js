import Nav from "./Nav"

function Layout({ children }) {
  return (
    <div className="w-full min-h-screen bg-white">
      <Nav />
      <main>{children}</main>
    </div>
  )
}

export default Layout