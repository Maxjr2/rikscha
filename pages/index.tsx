import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Booking Platform - Easy Ride Booking in Düsseldorf</title>
        <meta name="description" content="Book your ride easily in Düsseldorf and surrounding areas with our convenient booking platform." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Welcome to Our Booking Platform</h1>
        <p className="mb-4 text-gray-700 text-lg">Easy and convenient ride booking in Düsseldorf and surrounding areas.</p>
        <Link href="/book" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors" role="button" aria-label="Start booking a ride">
          Book a Ride
        </Link>
      </main>
    </div>
  )
}

export default Home