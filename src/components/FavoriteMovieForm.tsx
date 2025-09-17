'use client'

interface FavoriteMovieFormProps {
  favoriteMovie: string
  setFavoriteMovie: (movie: string) => void
  onSubmit: (e: React.FormEvent) => void
  isLoading: boolean
}

export default function FavoriteMovieForm({ 
  favoriteMovie, 
  setFavoriteMovie, 
  onSubmit,
  isLoading
}: FavoriteMovieFormProps) {
  return (
    <div className="bg-gray-800 rounded-2xl p-8 mb-8 border border-gray-700">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">
          What's Your Favorite Movie?
        </h3>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Tell us about your favorite movie and we'll generate amazing facts about it!
        </p>
        <form onSubmit={onSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={favoriteMovie}
              onChange={(e) => setFavoriteMovie(e.target.value)}
              placeholder="Enter movie title..."
              className="flex-1 px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all duration-200 text-white placeholder-gray-400"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!favoriteMovie.trim() || isLoading}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Save</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
