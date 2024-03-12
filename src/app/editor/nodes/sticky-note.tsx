import React, { useState } from 'react'
import { Kalam } from 'next/font/google'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import { cn } from '@/lib/utils'

const font = Kalam({
  subsets: ['latin'],
  weight: ['400']
})

const calculateFontSize = (width: number, height: number) => {
  const maxFontSize = 96
  const scaleFactor = 0.065
  const fontSizeBasedOnHeight = height * scaleFactor
  const fontSizeBasedOnWidth = width * scaleFactor

  return Math.min(fontSizeBasedOnHeight, fontSizeBasedOnWidth, maxFontSize)
}

type StickyNoteProps = {
  data: {
    text: string
  }
}

export default function StickyNote({ data }: StickyNoteProps) {
  const [textShow, setTextShow] = useState(data.text)

  const handleContentChange = (e: ContentEditableEvent) => {
    setTextShow(e.target.value)
  }

  return (
      <div className='w-60 h-60 flex flex-col justify-between bg-yellow-400 rounded-lg border border-yellow-400 mb-6 py-5 px-4 shadow'>
        <div>
          <h4 className='text-gray-800 font-bold mb-3'>13 things to work on</h4>
          {/* <p className='text-gray-800 text-sm'>{textShow}</p> */}
          <ContentEditable
            html={textShow || 'Text'}
            onChange={handleContentChange}
            className={cn(
              'h-full w-full flex items-center justify-center text-center outline-none',
              font.className
            )}
            style={{
              fontSize: calculateFontSize(240, 240),
              color: '#000'
            }}
          />
        </div>
        <div>
          <div className='flex items-center justify-between text-gray-800'>
            <p className='text-sm'>March 28, 2020</p>
            <button
              className='w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-yellow-400  focus:ring-black'
              aria-label='edit note'
              role='button'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-pencil'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z'></path>
                <path d='M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4'></path>
                <line x1='13.5' y1='6.5' x2='17.5' y2='10.5'></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
  )
}
