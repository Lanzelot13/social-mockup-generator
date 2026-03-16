'use client'

import React from 'react'

interface Props {
  image: string | null
  username: string
  profileImage: string | null
}

export default function InstagramStory({ image, username, profileImage }: Props) {
  return (
    <div className="w-[375px] h-[812px] bg-black rounded-xl overflow-hidden shadow-xl relative">
      {/* Background Image */}
      {image ? (
        <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400" />
      )}

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-5 py-2 text-xs font-semibold text-white">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="white"><rect x="0" y="5" width="3" height="7" rx="0.5"/><rect x="4" y="3" width="3" height="9" rx="0.5"/><rect x="8" y="1" width="3" height="11" rx="0.5"/><rect x="12" y="0" width="3" height="12" rx="0.5"/></svg>
            <svg width="15" height="12" viewBox="0 0 15 12" fill="white"><path d="M7.5 3.6C9.3 3.6 11 4.2 12.3 5.2L13.8 3.4C12 1.9 9.8 1 7.5 1S3 1.9 1.2 3.4L2.7 5.2C4 4.2 5.7 3.6 7.5 3.6Z"/><path d="M7.5 6.6C8.7 6.6 9.8 7 10.7 7.7L12.2 5.9C10.9 4.8 9.3 4.2 7.5 4.2S4.1 4.8 2.8 5.9L4.3 7.7C5.2 7 6.3 6.6 7.5 6.6Z"/><circle cx="7.5" cy="10.5" r="1.5"/></svg>
            <svg width="25" height="12" viewBox="0 0 25 12" fill="white"><rect x="0" y="1" width="21" height="10" rx="2" fill="none" stroke="white" strokeWidth="1"/><rect x="1.5" y="2.5" width="16" height="7" rx="1"/><rect x="22" y="4" width="2" height="4" rx="0.5"/></svg>
          </div>
        </div>

        {/* Story progress bars */}
        <div className="flex gap-1 px-2 pt-1">
          <div className="flex-1 h-[2px] bg-white rounded-full" />
          <div className="flex-1 h-[2px] bg-white/40 rounded-full" />
          <div className="flex-1 h-[2px] bg-white/40 rounded-full" />
        </div>

        {/* User info */}
        <div className="flex items-center justify-between px-3 py-3">
          <div className="flex items-center gap-2.5">
            {profileImage ? (
              <img src={profileImage} alt="" className="w-8 h-8 rounded-full object-cover border-2 border-white/50" />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-white text-xs font-bold">
                  {username.charAt(0).toUpperCase()}
                </div>
              </div>
            )}
            <span className="text-white text-sm font-medium">{username || 'username'}</span>
            <span className="text-white/60 text-xs">2 Std.</span>
          </div>
          <div className="flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/><circle cx="5" cy="12" r="1.5"/>
            </svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom area */}
        <div className="px-4 pb-6 space-y-3">
          {/* Reply input */}
          <div className="flex items-center gap-3">
            <div className="flex-1 border border-white/40 rounded-full px-4 py-2.5">
              <span className="text-white/60 text-sm">Nachricht senden</span>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
              <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
