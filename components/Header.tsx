import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

const Header: React.FC = () => {
  const { data: session } = useSession()

  return (
    <header className="bg-blue-700 text-white p-4" role="banner">
      <nav className="container mx-auto flex justify-between items-center" aria-label="Main navigation">
        <Link href="/" className="text-xl font-bold">
          <span className="sr-only">Booking Platform</span>
          <img src="/logo.png" alt="Booking Platform Logo" className="h-8" />
        </Link>
        <div>
          {session ? (
            <>
              {session.user.role === 'CLIENT' && (
                <Link href="/client/dashboard" className="mr-4 px-3 py-2 rounded bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white">
                  Client Dashboard
                </Link>
              )}
              {session.user.role === 'DRIVER' && (
                <Link href="/driver/dashboard" className="mr-4 px-3 py-2 rounded bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white">
                  Driver Dashboard
                </Link>
              )}
              <Link href="/user/profile" className="mr-4 px-3 py-2 rounded bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white">
                Profile
              </Link>
              <button 
                onClick={() => signOut()} 
                className="px-3 py-2 rounded bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link href="/user/login" className="mr-4 px-3 py-2 rounded bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white">
                Login
              </Link>
              <Link href="/user/register" className="px-3 py-2 rounded bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-white">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header