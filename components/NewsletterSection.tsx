"use client"
import { useState } from "react"

export default function NewsletterSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup logic
    console.log('Signing up with email:', email)
    setEmail('')
  }

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Join Our Newsletter</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-2 rounded-l-full focus:outline-none text-gray-900"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-r-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}