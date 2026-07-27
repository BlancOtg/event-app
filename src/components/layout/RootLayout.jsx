import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'


const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <Outlet />
        </main>
    </div>
  )
}

export default RootLayout
