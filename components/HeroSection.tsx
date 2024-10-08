import Image from 'next/image'
import Link from 'next/link'
import HeroImage from '../assets/heroImage.png'

export default function HeroSection() {
  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Access your Personalized Workout Plans on the go with Fitly
            </h1>
            <div className="space-x-4">
              <Link href="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center">
                Try Now
              </Link>
              <Link href="/how-it-works" className="bg-gray-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-600 transition duration-300 inline-flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                How it works
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src={HeroImage}
              alt="Fitness enthusiast holding a water bottle and gym bag"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}