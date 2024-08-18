import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

const Header: React.FC = () => {
  const { data: session } = useSession()

  return (
    <header className="bg-federal-blue text-white p-4" role="banner">
      <nav className="container mx-auto flex justify-between items-center" aria-label="Main navigation">
        <Link href="/" className="text-xl font-bold">
          <span className="sr-only">Booking Platform</span>
          <img src="/logo.png" alt="Booking Platform Logo" className="h-8" />
        </Link>
        <div>
          <Link href="/book/book" className="btn btn-primary bg-slate-700 mr-4">
            Book Now
          </Link>
          {session ? (
            <>
              {session.user.role === 'CLIENT' && (
                <Link href="/client/dashboard" className="btn btn-primary bg-slate-700 mr-4">
                  Client Dashboard
                </Link>
              )}
              {session.user.role === 'DRIVER' && (
                <Link href="/driver/dashboard" className="btn btn-primary bg-slate-700 mr-4">
                  Driver Dashboard
                </Link>
              )}
              <Link href="/user/profile" className="btn btn-primary bg-slate-700 mr-4">
                Profile
              </Link>
              <button
                onClick={() => signOut()}
                className="btn btn-danger"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link href="/user/login" className="btn btn-primary mr-4 bg-slate-700">
                Login
              </Link>
              <Link href="/user/register" className="btn btn-primary">
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