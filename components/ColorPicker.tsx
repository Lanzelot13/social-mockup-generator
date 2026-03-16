'use client'

import React from 'react'

interface ColorPickerProps {
  color: string
  onChange: (color: string) => void
}

const presets = [
  '#ffffff', '#f3f4f6', '#1f2937', '#000000',
  '#3b82f6', '#8b5cf6', '#ec4899', '#ef4444',
  '#f97316', '#eab308', '#22c55e', '#06b6d4',
]

export default function ColorPicker({ color, onChange }: ColorPickerProps) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">Hintergrundfarbe</label>

      <div className="flex items-center gap-2">
        <input
          type="color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="w-8 h-8 rounded cursor-pointer border border-gray-200"
        />
        <input
          type="text"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="w-24 px-2 py-1.5 border border-gray-200 rounded text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-wrap gap-1.5">
        {presets.map((preset) => (
          <button
            key={preset}
            onClick={() => onChange(preset)}
            className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-110 ${
              color === preset ? 'border-blue-500 scale-110' : 'border-gray-200'
            }`}
            style={{ backgroundColor: preset }}
            title={preset}
          />
        ))}
      </div>
    </div>
  )
}
