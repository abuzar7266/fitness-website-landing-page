import Link from 'next/link'

export default function WorkoutPlansSection() {
  const plans = [
    { name: 'Strength Training', description: 'Build muscle and increase strength with personalized weight training programs.' },
    { name: 'Cardio', description: 'Improve your cardiovascular health and endurance with tailored cardio workouts.' },
    { name: 'Flexibility', description: 'Enhance your flexibility and reduce the risk of injury with customized stretching routines.' },
    { name: 'General Wellness', description: 'Achieve overall fitness and well-being with balanced, full-body workout plans.' }
  ];

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Personalized Workout Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-white">{plan.name}</h3>
              <p className="text-gray-300 mb-4">{plan.description}</p>
              <Link href={`/plans/${plan.name.toLowerCase().replace(' ', '-')}`} className="text-blue-400 font-semibold hover:underline">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}