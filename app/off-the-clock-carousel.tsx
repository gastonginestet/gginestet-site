'use client'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const IMAGES = [
  { src: '/carousel-1.jpeg' },
  { src: '/carousel-2.jpeg' },
  { src: '/carousel-3.jpeg' },
  { src: '/carousel-4.jpeg' },
]

const DRAG_COMMIT_THRESHOLD_PCT = 15
const AUTOPLAY_INTERVAL_MS = 4000

const arrowClassName =
  'flex h-8 w-8 shrink-0 items-center justify-center text-text transition-colors duration-150 ease-out hover:text-accent'

export function OffTheClockCarousel() {
  const total = IMAGES.length
  const [index, setIndex] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [dragPct, setDragPct] = useState(0)
  const wrapRef = useRef<HTMLDivElement>(null)
  const dragStartX = useRef(0)
  const dragWidth = useRef(1)
  const draggingRef = useRef(false)

  useEffect(() => {
    const id = setInterval(() => {
      if (!draggingRef.current) {
        setIndex((i) => (i + 1) % total)
      }
    }, AUTOPLAY_INTERVAL_MS)
    return () => clearInterval(id)
  }, [total])

  function next() {
    setIndex((i) => (i + 1) % total)
  }

  function prev() {
    setIndex((i) => (i - 1 + total) % total)
  }

  function onPointerDown(e: React.PointerEvent) {
    dragStartX.current = e.clientX
    dragWidth.current = wrapRef.current?.offsetWidth || 1
    draggingRef.current = true
    setDragging(true)
    setDragPct(0)
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!draggingRef.current) return
    const dx = e.clientX - dragStartX.current
    setDragPct((dx / dragWidth.current) * 100)
  }

  function onPointerUp() {
    if (!draggingRef.current) return
    draggingRef.current = false
    setDragging(false)
    if (dragPct < -DRAG_COMMIT_THRESHOLD_PCT) setIndex((i) => (i + 1) % total)
    else if (dragPct > DRAG_COMMIT_THRESHOLD_PCT)
      setIndex((i) => (i - 1 + total) % total)
    setDragPct(0)
  }

  const trackPercent = -(index * (100 / total)) - dragPct / total

  return (
    <div className="flex w-full items-center justify-center gap-1">
      <button
        type="button"
        onClick={prev}
        aria-label="Previous photo"
        className={arrowClassName}
      >
        <ChevronLeft className="h-[18px] w-[18px]" strokeWidth={2} />
      </button>

      <div
        ref={wrapRef}
        className="relative max-w-full min-w-0 flex-1 touch-pan-y overflow-hidden select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(${trackPercent}%)`,
            transition: dragging ? 'none' : 'transform 0.35s ease',
            width: `${total * 100}%`,
          }}
        >
          {IMAGES.map((photo) => (
            <div
              key={photo.src}
              className="bg-bg relative h-[260px] shrink-0 min-[760px]:h-[460px]"
              style={{ width: `${100 / total}%` }}
            >
              <Image
                src={photo.src}
                alt="Off the clock"
                fill
                draggable={false}
                className="pointer-events-none object-contain"
                sizes="(max-width: 760px) 100vw, 500px"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={next}
        aria-label="Next photo"
        className={arrowClassName}
      >
        <ChevronRight className="h-[18px] w-[18px]" strokeWidth={2} />
      </button>
    </div>
  )
}
