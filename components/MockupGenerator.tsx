'use client'

import React, { useState, useMemo } from 'react'
import ImageUploader from './ImageUploader'
import NetworkSelector, { MockupFormat } from './NetworkSelector'
import ProfileEditor from './ProfileEditor'
import ColorPicker from './ColorPicker'
import InstagramPost from './mockups/InstagramPost'
import InstagramStory from './mockups/InstagramStory'
import InstagramReel from './mockups/InstagramReel'
import TikTokFeed from './mockups/TikTokFeed'

export default function MockupGenerator() {
  const [croppedImage, setCroppedImage] = useState<string | null>(null)
  const [format, setFormat] = useState<MockupFormat>({ network: 'instagram', format: 'post' })
  const [username, setUsername] = useState('pulpmedia')
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [bgColor, setBgColor] = useState('#f3f4f6')
  const [caption, setCaption] = useState('')

  const aspectRatio = useMemo(() => {
    if (format.network === 'instagram' && format.format === 'post') return 4 / 5
    return 9 / 16
  }, [format])

  const defaultCaption = useMemo(() => {
    if (format.network === 'tiktok') return 'Das ist ein Beispiel-Video 🎬✨ #viral #fyp #foryou'
    if (format.format === 'reel') return 'Das ist ein Beispiel-Reel ✨🎬'
    if (format.format === 'story') return ''
    return 'Das ist ein Beispiel-Beitrag ✨'
  }, [format])

  const handleReset = () => {
    setCroppedImage(null)
    setUsername('pulpmedia')
    setProfileImage(null)
    setBgColor('#f3f4f6')
    setCaption('')
    setFormat({ network: 'instagram', format: 'post' })
  }

  const renderMockup = () => {
    const props = { image: croppedImage, username, profileImage, caption: caption || defaultCaption }

    if (format.network === 'tiktok') {
      return <TikTokFeed {...props} />
    }

    switch (format.format) {
      case 'story':
        return <InstagramStory {...props} />
      case 'reel':
        return <InstagramReel {...props} />
      case 'post':
      default:
        return <InstagramPost {...props} />
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 p-6 space-y-6 overflow-y-auto flex-shrink-0">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Mockup Generator</h1>
          <p className="text-sm text-gray-500 mt-1">Social Media Mockups erstellen</p>
        </div>

        <div className="h-px bg-gray-100" />

        <NetworkSelector selected={format} onChange={(f) => {
          setFormat(f)
          // Reset cropped image when format changes (aspect ratio might differ)
          setCroppedImage(null)
        }} />

        <div className="h-px bg-gray-100" />

        <ImageUploader
          onImageCropped={setCroppedImage}
          aspectRatio={aspectRatio}
          currentImage={croppedImage}
        />

        <div className="h-px bg-gray-100" />

        <ProfileEditor
          username={username}
          onUsernameChange={setUsername}
          profileImage={profileImage}
          onProfileImageChange={setProfileImage}
        />

        <div className="h-px bg-gray-100" />

        {/* Caption Editor – nicht bei Story */}
        {!(format.network === 'instagram' && format.format === 'story') && (
          <>
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">Text / Caption</label>
              <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder={defaultCaption}
                rows={3}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            <div className="h-px bg-gray-100" />
          </>
        )}

        <ColorPicker color={bgColor} onChange={setBgColor} />

        <div className="h-px bg-gray-100" />

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="w-full py-2.5 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
          </svg>
          Zurücksetzen
        </button>

        <div className="text-xs text-gray-400 pt-2">
          Tipp: Mache einen Screenshot des Mockups mit deinem Betriebssystem-Tool
          (Cmd+Shift+4 auf Mac, Win+Shift+S auf Windows).
        </div>
      </div>

      {/* Preview Area */}
      <div
        className="flex-1 flex items-center justify-center p-8 transition-colors duration-300 mockup-container overflow-auto"
        style={{ backgroundColor: bgColor }}
      >
        {renderMockup()}
      </div>
    </div>
  )
}
