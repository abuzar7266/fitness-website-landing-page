import Link from 'next/link'

export default function MembershipSection() {
  const plans = [
    { name: 'One Time Plan', price: '$49.99', period: '' },
    { name: 'One Month Plan', price: '$29.99', period: '/month' },
    { name: 'One Year Plan', price: '$199.99', period: '/year' }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Choose Your Membership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-gray-800 rounded-lg p-8 text-center transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-white">{plan.name}</h3>
              <p className="text-4xl font-bold mb-2 text-blue-400">{plan.price}</p>
              <p className="text-gray-400 mb-6">{plan.period}</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300 mb-4 w-full">
                Choose Plan
              </button>
              <Link href="/pricing" className="text-blue-400 hover:underline">
                Know More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}