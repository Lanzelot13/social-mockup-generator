'use client'

import React, { useCallback } from 'react'

interface ProfileEditorProps {
  username: string
  onUsernameChange: (username: string) => void
  profileImage: string | null
  onProfileImageChange: (image: string) => void
}

export default function ProfileEditor({
  username,
  onUsernameChange,
  profileImage,
  onProfileImageChange,
}: ProfileEditorProps) {
  const onFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        const reader = new FileReader()
        reader.addEventListener('load', () => {
          onProfileImageChange(reader.result as string)
        })
        reader.readAsDataURL(e.target.files[0])
      }
    },
    [onProfileImageChange]
  )

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">Profil</label>

      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            onChange={onFileChange}
            className="hidden"
            id="profile-upload"
          />
          <label htmlFor="profile-upload" className="cursor-pointer block">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-sm font-bold">
                {username.charAt(0).toUpperCase() || 'U'}
              </div>
            )}
          </label>
        </div>

        {/* Username */}
        <input
          type="text"
          value={username}
          onChange={(e) => onUsernameChange(e.target.value)}
          placeholder="username"
          className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  )
}
