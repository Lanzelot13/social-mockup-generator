'use client'

import React from 'react'

export type Network = 'instagram' | 'tiktok'
export type InstagramFormat = 'post' | 'story' | 'reel'
export type MockupFormat = { network: Network; format: InstagramFormat | 'feed' }

interface NetworkSelectorProps {
  selected: MockupFormat
  onChange: (format: MockupFormat) => void
}

export default function NetworkSelector({ selected, onChange }: NetworkSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">Netzwerk & Format</label>

      {/* Network Tabs */}
      <div className="flex rounded-lg overflow-hidden border border-gray-200">
        <button
          onClick={() => onChange({ network: 'instagram', format: 'post' })}
          className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
            selected.network === 'instagram'
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          Instagram
        </button>
        <button
          onClick={() => onChange({ network: 'tiktok', format: 'feed' })}
          className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
            selected.network === 'tiktok'
              ? 'bg-black text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          TikTok
        </button>
      </div>

      {/* Instagram Sub-formats */}
      {selected.network === 'instagram' && (
        <div className="flex gap-2">
          {([
            { key: 'post', label: 'Post' },
            { key: 'story', label: 'Story' },
            { key: 'reel', label: 'Reel' },
          ] as const).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => onChange({ network: 'instagram', format: key })}
              className={`flex-1 py-2 text-sm rounded-lg transition-colors ${
                selected.format === key
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
