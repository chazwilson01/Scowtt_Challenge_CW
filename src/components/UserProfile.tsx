'use client'
import Image from 'next/image'

interface UserProfileProps {
  user: {
    name?: string | null
    email?: string | null
    image?: string | null
  }
}

export default function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center space-x-4 mb-6">
        {user?.image ? (
          <Image
            src={user.image}
            alt={user.name || 'User'}
            width={60}
            height={60}
            className="rounded-full border-2 border-cyan-400"
          />
        ) : (
          <div className="w-15 h-15 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-bold">
              {user?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
            </span>
          </div>
        )}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Hey, {user?.name || 'there'}! 👋
          </h2>
          <p className="text-gray-400">{user?.email}</p>
        </div>
      </div>
    </div>
  )
}
