import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

type FormData = {
  email: string
  password: string
}

const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [serverError, setServerError] = useState<string | null>(null)
  const router = useRouter()

  const onSubmit = async (data: FormData) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      })

      if (result?.error) {
        setServerError(result.error)
      } else {
        // Redirect based on user role
        const response = await fetch('/api/user/me')
        const userData = await response.json()
        if (userData.role === 'CLIENT') {
          router.push('/client/dashboard')
        } else if (userData.role === 'DRIVER') {
          router.push('/driver/dashboard')
        } else {
          router.push('/')
        }
      }
    } catch (error) {
      setServerError('An error occurred. Please try again.')
    }
  }

  return (
    <>
      <Head>
        <title>Login - Booking Platform</title>
        <meta name="description" content="Log in to your Booking Platform account" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Log In</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md" noValidate>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format'
                }
              })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="mt-1 text-red-500">{errors.email.message}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 font-bold text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="mt-1 text-red-500">{errors.password.message}</p>}
          </div>
          {serverError && <p className="mb-4 text-red-500">{serverError}</p>}
          <button type="submit" className="w-full bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Log In
          </button>
        </form>
        <p className="mt-4">
          Dont have an account? <Link href="/user/register" className="text-blue-700 hover:text-blue-600">Register here</Link>
        </p>
      </main>
    </>
  )
}

export default LoginPage