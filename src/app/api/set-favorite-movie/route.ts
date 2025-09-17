import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { favoriteMovie } = await request.json()

    if (!favoriteMovie || typeof favoriteMovie !== 'string') {
      return NextResponse.json({ error: 'Favorite movie is required' }, { status: 400 })
    }

    const user = await prisma.user.update({
      where: { email: session.user.email },
      data: { favoriteMovie: favoriteMovie.trim() }
    })

    return NextResponse.json({ success: true, user })
  } catch (error) {
    console.error('Error setting favorite movie:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
