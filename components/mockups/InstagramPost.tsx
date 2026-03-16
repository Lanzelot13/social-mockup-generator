'use client'

import React from 'react'

interface Props {
  image: string | null
  username: string
  profileImage: string | null
  caption: string
}

export default function InstagramPost({ image, username, profileImage, caption }: Props) {
  return (
    <div className="w-[375px] bg-white rounded-xl overflow-hidden shadow-xl">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-5 py-2 text-xs font-semibold">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor"><rect x="0" y="5" width="3" height="7" rx="0.5"/><rect x="4" y="3" width="3" height="9" rx="0.5"/><rect x="8" y="1" width="3" height="11" rx="0.5"/><rect x="12" y="0" width="3" height="12" rx="0.5"/></svg>
          <svg width="15" height="12" viewBox="0 0 15 12" fill="currentColor"><path d="M7.5 3.6C9.3 3.6 11 4.2 12.3 5.2L13.8 3.4C12 1.9 9.8 1 7.5 1S3 1.9 1.2 3.4L2.7 5.2C4 4.2 5.7 3.6 7.5 3.6Z"/><path d="M7.5 6.6C8.7 6.6 9.8 7 10.7 7.7L12.2 5.9C10.9 4.8 9.3 4.2 7.5 4.2S4.1 4.8 2.8 5.9L4.3 7.7C5.2 7 6.3 6.6 7.5 6.6Z"/><circle cx="7.5" cy="10.5" r="1.5"/></svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="currentColor"><rect x="0" y="1" width="21" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1"/><rect x="1.5" y="2.5" width="16" height="7" rx="1" fill="currentColor"/><rect x="22" y="4" width="2" height="4" rx="0.5"/></svg>
        </div>
      </div>

      {/* Header Nav */}
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray-100">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 12H4M4 12L10 6M4 12L10 18"/></svg>
        <span className="font-semibold text-base">Instagram</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5V19M5 12H19"/></svg>
      </div>

      {/* Post Header */}
      <div className="flex items-center justify-between px-3 py-2.5">
        <div className="flex items-center gap-2.5">
          {profileImage ? (
            <img src={profileImage} alt="" className="w-8 h-8 rounded-full object-cover" />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-xs font-bold text-gray-700">
                {username.charAt(0).toUpperCase()}
              </div>
            </div>
          )}
          <div>
            <span className="text-[13px] font-semibold">{username || 'username'}</span>
          </div>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <circle cx="8" cy="2" r="1.5" /><circle cx="8" cy="8" r="1.5" /><circle cx="8" cy="14" r="1.5" />
        </svg>
      </div>

      {/* Image */}
      <div className="w-full aspect-square bg-gray-200">
        {image ? (
          <img src={image} alt="" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Action Icons */}
      <div className="flex justify-between items-center px-3 py-2.5">
        <div className="flex items-center gap-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      </div>

      {/* Likes */}
      <div className="px-3 pb-1">
        <span className="text-[13px] font-semibold">12.847 Likes</span>
      </div>

      {/* Caption */}
      <div className="px-3 pb-2">
        <span className="text-[13px]">
          <span className="font-semibold">{username || 'username'}</span>{' '}
          <span className="text-gray-700">{caption}</span>
        </span>
      </div>

      {/* Comments link */}
      <div className="px-3 pb-2">
        <span className="text-[13px] text-gray-400">Alle 284 Kommentare ansehen</span>
      </div>

      {/* Time */}
      <div className="px-3 pb-3">
        <span className="text-[10px] text-gray-400 uppercase">Vor 2 Stunden</span>
      </div>

      {/* Bottom Nav */}
      <div className="flex justify-around items-center py-2 border-t border-gray-100">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        <div className="w-6 h-6 rounded-full bg-gray-300" />
      </div>
    </div>
  )
}
