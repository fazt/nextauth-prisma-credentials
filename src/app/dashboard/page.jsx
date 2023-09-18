"use client"
import {signOut} from 'next-auth/react'

function DashboardPage() {
  return (
    <section className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <div>
        <h1 className="text-white text-5xl">Dashboard</h1>
        <button className="bg-white text-black px-4 py-2 rounded-md mt-4"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
    </section>
  )
}
export default DashboardPage