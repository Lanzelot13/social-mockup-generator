'use client'

import React, { useState, useCallback } from 'react'
import Cropper, { Area, Point } from 'react-easy-crop'
import { getCroppedImg } from './cropUtils'

interface ImageUploaderProps {
  onImageCropped: (croppedImage: string) => void
  aspectRatio: number
  currentImage: string | null
}

export default function ImageUploader({ onImageCropped, aspectRatio, currentImage }: ImageUploaderProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null)
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
  const [showCropper, setShowCropper] = useState(false)

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        setImageSrc(reader.result as string)
        setShowCropper(true)
        setCrop({ x: 0, y: 0 })
        setZoom(1)
      })
      reader.readAsDataURL(e.target.files[0])
    }
  }, [])

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        setImageSrc(reader.result as string)
        setShowCropper(true)
        setCrop({ x: 0, y: 0 })
        setZoom(1)
      })
      reader.readAsDataURL(e.dataTransfer.files[0])
    }
  }, [])

  const onCropComplete = useCallback((_: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const applyCrop = useCallback(async () => {
    if (imageSrc && croppedAreaPixels) {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels)
      onImageCropped(croppedImage)
      setShowCropper(false)
    }
  }, [imageSrc, croppedAreaPixels, onImageCropped])

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">Bild</label>

      {/* Upload Area */}
      <div
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors"
      >
        <input
          type="file"
          accept="image/*"
          onChange={onFileChange}
          className="hidden"
          id="image-upload"
        />
        <label htmlFor="image-upload" className="cursor-pointer">
          {currentImage ? (
            <div className="space-y-2">
              <img src={currentImage} alt="Preview" className="w-20 h-20 object-cover rounded mx-auto" />
              <p className="text-sm text-gray-500">Klick oder Drag & Drop zum Ersetzen</p>
            </div>
          ) : (
            <div className="space-y-2 py-2">
              <svg className="mx-auto h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm text-gray-500">Bild hochladen oder hierher ziehen</p>
            </div>
          )}
        </label>
      </div>

      {/* Cropper Modal */}
      {showCropper && imageSrc && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-lg overflow-hidden">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-900">Bildausschnitt wählen</h3>
              <p className="text-sm text-gray-500 mt-1">
                Seitenverhältnis: {aspectRatio === 1 ? '1:1' : '9:16'}
              </p>
            </div>
            <div className="relative h-80 bg-gray-900">
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={aspectRatio}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500 w-12">Zoom</span>
                <input
                  type="range"
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.05}
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="flex-1 accent-blue-600"
                />
              </div>
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => setShowCropper(false)}
                  className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Abbrechen
                </button>
                <button
                  onClick={applyCrop}
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Übernehmen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
