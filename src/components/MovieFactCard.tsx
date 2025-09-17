'use client'

interface MovieFactCardProps {
  movieTitle: string
  movieFact?: string | null
  isLoading: boolean
  onFetchNewFact: () => void
}

export default function MovieFactCard({ 
  movieTitle, 
  movieFact, 
  isLoading, 
  onFetchNewFact 
}: MovieFactCardProps) {
  return (
    <div className="bg-gray-800 rounded-2xl p-8 mb-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">{movieTitle}</h1>
          </div>
        </div>
        <button
          onClick={onFetchNewFact}
          disabled={isLoading}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-lg transition-all duration-200 text-sm font-medium"
        >
          {isLoading ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Loading...</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>New Fact</span>
            </>
          )}
        </button>
      </div>
      <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
        <p className="text-gray-300 text-lg leading-relaxed">
          {movieFact}
        </p>
      </div>
    </div>
  )
}
