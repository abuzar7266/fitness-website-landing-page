import Image from 'next/image'
import Company1 from '../assets/asSeen1.jpg'
import Company2 from '../assets/asSeen2.png'
import Company3 from '../assets/logo.png'
import Company4 from '../assets/asSeen1.jpg'

export default function AsSeenOnSection() {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8 text-white">As Seen On</h2>
        <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4 md:space-y-0">
          {[Company1, Company2, Company3, Company4].map((brand, index) => (
            <Image 
              key={index} 
              src={brand} 
              alt={`Brand logo ${index + 1}`} 
              width={120} 
              height={60} 
              className="opacity-70 hover:opacity-100 transition-opacity duration-300" 
            />
          ))}
        </div>
      </div>
    </section>
  )
}