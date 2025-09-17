'use client'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import UserProfile from '@/components/UserProfile'
import MovieFactCard from '@/components/MovieFactCard'
import FavoriteMovieForm from '@/components/FavoriteMovieForm'
import FeaturesGrid from '@/components/FeaturesGrid'
import LoginPage from '@/components/LoginPage'

interface MovieFact {
  movieFact: string
  movieTitle: string
}

export default function Home() {
  const { data: session, status } = useSession()
  const [favoriteMovie, setFavoriteMovie] = useState('')
  const [movieFact, setMovieFact] = useState<MovieFact | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (session?.user?.email && session?.user?.favoriteMovie) {
      fetchMovieFact()
    }
  }, [session?.user?.email, session?.user?.favoriteMovie])

  const fetchMovieFact = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/movie-fact')
      if (response.ok) {
        const data = await response.json()
        setMovieFact(data)
      } else if (response.status === 404) {
        setMovieFact(null)
      }
    } catch (error) {
      console.error('Error fetching movie fact:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const setFavoriteMovieHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!favoriteMovie.trim()) return

    setIsLoading(true)
    try {
      const response = await fetch('/api/set-favorite-movie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ favoriteMovie: favoriteMovie.trim() }),
      })

      if (response.ok) {
        await fetchMovieFact()
        if (session?.user) {
          session.user.favoriteMovie = favoriteMovie.trim()
        }
        setFavoriteMovie('')
      }
    } catch (error) {
      console.error('Error setting favorite movie:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-lg text-white">Loading...</div>
      </div>
    )
  }

  if (!session) {
    return <LoginPage />
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-6 py-8">
        <UserProfile user={session.user} />
        
        {session.user?.favoriteMovie ? (
          <MovieFactCard
            movieTitle={session.user.favoriteMovie}
            movieFact={movieFact?.movieFact}
            isLoading={isLoading}
            onFetchNewFact={fetchMovieFact}
          />
        ) : (
          <FavoriteMovieForm
            favoriteMovie={favoriteMovie}
            setFavoriteMovie={setFavoriteMovie}
            onSubmit={setFavoriteMovieHandler}
            isLoading={isLoading}
          />
        )}
        
        <FeaturesGrid />
      </main>
    </div>
  )
}
