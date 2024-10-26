'use client'

import dynamic from 'next/dynamic'

const Animated3dShape = dynamic(() => import('@/components/AnimatedShape'), {
  ssr: false
})

export default function CoolArea() {
  return (
    <main>
      <Animated3dShape />
    </main>
  )
}