'use client'

export default function FeaturesGrid() {
  const features = [
    {
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Instant Facts",
      description: "Get fresh, interesting facts about your favorite movie every time you refresh.",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI Powered",
      description: "Powered by OpenAI to generate unique and fascinating movie trivia.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Personalized",
      description: "Your movie preferences are saved for a personalized experience.",
      gradient: "from-blue-400 to-cyan-500"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/30 transition-all duration-300">
          <div className="flex items-center space-x-3 mb-4">
            <div className={`w-10 h-10 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center`}>
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
          </div>
          <p className="text-gray-400 text-sm">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  )
}
