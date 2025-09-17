import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateMovieFact } from '@/lib/openai'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user || !user.favoriteMovie) {
      return NextResponse.json({ error: 'User not found or no favorite movie set' }, { status: 404 })
    }

    const movieFact = await generateMovieFact(user.favoriteMovie)

    return NextResponse.json({ 
      movieFact,
      movieTitle: user.favoriteMovie 
    })
  } catch (error) {
    console.error('Error fetching movie fact:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
