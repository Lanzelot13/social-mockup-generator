'use client'

import React from 'react'

interface Props {
  image: string | null
  username: string
  profileImage: string | null
}

export default function TikTokFeed({ image, username, profileImage }: Props) {
  return (
    <div className="w-[375px] h-[812px] bg-black rounded-xl overflow-hidden shadow-xl relative">
      {/* Background Image */}
      {image ? (
        <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

      {/* Content */}
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

        {/* Top Navigation */}
        <div className="flex justify-center items-center gap-4 py-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="absolute left-4">
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 10-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 119.5 5a4.5 4.5 0 010 9z"/>
          </svg>
          <span className="text-white/60 text-base font-medium">Folge ich</span>
          <span className="text-white text-base font-bold relative">
            Für dich
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-white rounded-full" />
          </span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="absolute right-4">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
          </svg>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom content */}
        <div className="flex items-end px-3 pb-4">
          {/* Left: User info */}
          <div className="flex-1 space-y-2.5 pr-3">
            <div className="flex items-center gap-2">
              <span className="text-white text-[15px] font-bold">@{username || 'username'}</span>
            </div>
            <p className="text-white text-[13px] leading-tight">
              Das ist ein Beispiel-Video 🎬✨ #viral #fyp #foryou
            </p>
            <div className="flex items-center gap-2 mt-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
              <div className="overflow-hidden">
                <span className="text-white text-[12px] whitespace-nowrap">Originalsound – {username || 'username'}</span>
              </div>
            </div>
          </div>

          {/* Right: Action buttons */}
          <div className="flex flex-col items-center gap-4">
            {/* Profile */}
            <div className="relative mb-2">
              {profileImage ? (
                <img src={profileImage} alt="" className="w-11 h-11 rounded-full object-cover border-2 border-white" />
              ) : (
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm border-2 border-white">
                  {username.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </div>
            </div>

            {/* Heart */}
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-11 h-11 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <span className="text-white text-[11px] font-medium">89,3K</span>
            </div>

            {/* Comment */}
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-11 h-11 flex items-center justify-center">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <span className="text-white text-[11px] font-medium">4.528</span>
            </div>

            {/* Bookmark */}
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-11 h-11 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <span className="text-white text-[11px] font-medium">12,8K</span>
            </div>

            {/* Share */}
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-11 h-11 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" transform="rotate(90 12 12)" />
                </svg>
              </div>
              <span className="text-white text-[11px] font-medium">3.241</span>
            </div>

            {/* Audio disc */}
            <div className="w-10 h-10 rounded-full border-2 border-gray-600 overflow-hidden animate-spin" style={{ animationDuration: '3s' }}>
              {profileImage ? (
                <img src={profileImage} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-500 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gray-900" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="flex justify-around items-center py-2.5 bg-black/50">
          <div className="flex flex-col items-center gap-0.5">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
            <span className="text-white text-[10px]">Start</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white/60" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <span className="text-white/60 text-[10px]">Entdecken</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <div className="w-10 h-7 relative">
              <div className="absolute left-0 top-0 w-8 h-7 rounded-lg bg-cyan-400" />
              <div className="absolute right-0 top-0 w-8 h-7 rounded-lg bg-red-500" />
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-8 h-7 rounded-lg bg-white flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="black"><line x1="12" y1="5" x2="12" y2="19" strokeWidth="3" stroke="black"/><line x1="5" y1="12" x2="19" y2="12" strokeWidth="3" stroke="black"/></svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white/60" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
            <span className="text-white/60 text-[10px]">Posteingang</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white/60" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span className="text-white/60 text-[10px]">Profil</span>
          </div>
        </div>
      </div>
    </div>
  )
}
