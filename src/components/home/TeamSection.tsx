"use client"
import { useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { SectionHeader } from '../ui/SectionHeader'

const team = [
  { id: 1, name: 'Shahida', role: 'HR Administration Manager | Dedicated Client Support', image: '/images/team/shahida.webp' },
  { id: 2, name: 'Yasmin', role: 'HR Specialist', image: '/images/team/Yasmine.webp' },
  { id: 3, name: 'Noor', role: 'HR Assistant', image: '/images/team/Noor.webp' }
]

function TeamCard({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <article className="rounded-2xl border border-gray-100 overflow-hidden bg-white flex-shrink-0 w-[78vw] sm:w-[44vw] lg:w-auto snap-start p-4">
      <div className="relative aspect-square w-full bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={`${name}, ${role} at Pickmymaid`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 78vw, 25vw"
          loading="lazy"
        />
      </div>
      <div className="pt-4">
        <p className="font-semibold text-dark text-sm lg:text-base">{name}</p>
        <p className="text-muted text-xs lg:text-sm mt-0.5">{role}</p>
      </div>
    </article>
  )
}

export function TeamSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)

  const advance = useCallback(() => {
    const track = trackRef.current
    if (!track || pausedRef.current) return
    const cards = Array.from(track.children) as HTMLElement[]
    // Find the currently snapped card by closest offsetLeft to scrollLeft
    const scrollLeft = track.scrollLeft
    let current = 0
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].offsetLeft <= scrollLeft + 2) current = i
    }
    const next = current + 1 < cards.length ? current + 1 : 0
    track.scrollTo({ left: cards[next].offsetLeft, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const id = setInterval(advance, 3500)

    // Pause auto-advance while the user is touching
    const pause = () => { pausedRef.current = true }
    const resume = () => {
      // Small delay so the snap animation completes before we take over again
      setTimeout(() => { pausedRef.current = false }, 600)
    }

    track.addEventListener('touchstart', pause, { passive: true })
    track.addEventListener('touchend', resume, { passive: true })

    return () => {
      clearInterval(id)
      track.removeEventListener('touchstart', pause)
      track.removeEventListener('touchend', resume)
    }
  }, [advance])

  return (
    <section className="py-12 lg:py-20 bg-[#fafafa]" aria-label="Our Team">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16">
        <SectionHeader
          breadcrumb="Our Team"
          heading="Meet the people behind Pickmymaid!"
          subheading="We are a real team based in Dubai. When you contact us, you speak to a person — not a bot, not an automated system."
        />

        {/* Desktop: 4-column grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {team.map(m => (
            <TeamCard key={m.id} name={m.name} role={m.role} image={m.image} />
          ))}
        </div>

        {/* Mobile: CSS scroll-snap slider with auto-advance */}
        <div
          ref={trackRef}
          className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar"
        >
          {team.map(m => (
            <TeamCard key={m.id} name={m.name} role={m.role} image={m.image} />
          ))}
        </div>
      </div>
    </section>
  )
}
