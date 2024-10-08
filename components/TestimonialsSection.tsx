import Image from 'next/image'

const testimonials = [
  {
    name: 'John Doe',
    image: '/testimonial1.jpg',
    text: 'Fitly has transformed my fitness journey. The personalized plans are amazing!'
  },
  {
    name: 'Jane Smith',
    image: '/testimonial2.jpg',
    text: 'I love how easy it is to access my workouts on any device. Highly recommended!'
  },
  {
    name: 'Mike Johnson',
    image: '/testimonial3.jpg',
    text: 'The variety of workout plans keeps me motivated. Fitly is a game-changer!'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
              </div>
              <p className="text-gray-300">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}