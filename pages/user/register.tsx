import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Head from 'next/head'
import Link from 'next/link'

type FormData = {
  name: string
  email: string
  password: string
  confirmPassword: string
  role: 'CLIENT' | 'DRIVER'
}

const RegisterPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>()
  const [serverError, setServerError] = useState<string | null>(null)

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
          role: data.role
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Registration failed')
      }

      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      if (error instanceof Error) {
        setServerError(error.message)
      } else {
        setServerError('An unknown error occurred')
      }
    }
  }

  return (
    <>
      <Head>
        <title>Register - Booking Platform</title>
        <meta name="description" content="Create a new account on Booking Platform" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Create an Account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md" noValidate>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold text-gray-700">Name</label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="mt-1 text-red-500">{errors.name.message}</p>}
          </div>
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
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-bold text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="mt-1 text-red-500">{errors.password.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2 font-bold text-gray-700">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              {...register('confirmPassword', { 
                required: 'Please confirm your password',
                validate: (val: string) => {
                  if (watch('password') != val) {
                    return "Your passwords do not match";
                  }
                },
               })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirmPassword && <p className="mt-1 text-red-500">{errors.confirmPassword.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block mb-2 font-bold text-gray-700">Role</label>
            <select
              id="role"
              {...register('role', { required: 'Role is required' })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="CLIENT">Client</option>
              <option value="DRIVER">Driver</option>
            </select>
            {errors.role && <p className="mt-1 text-red-500">{errors.role.message}</p>}
          </div>
          {serverError && <p className="mb-4 text-red-500">{serverError}</p>}
          <button type="submit" className="w-full bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Register
          </button>
        </form>
        <p className="mt-4">
          Already have an account? <Link href="/user/login" className="text-blue-700 hover:text-blue-600">Log in here</Link>
        </p>
      </main>
    </>
  )
}

export default RegisterPage