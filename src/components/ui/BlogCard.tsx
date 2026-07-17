import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays } from 'lucide-react'

export type BlogCardProps = {
  image: string
  date: string
  title: string
  href?: string
}

export function BlogCard({ image, date, title, href = '#' }: BlogCardProps) {
  return (
    <Link href={href} className="group flex flex-col rounded-3xl overflow-hidden bg-white">
      {/* Image with date badge */}
      <div className="relative h-[250px] lg:h-[340px] overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {/* Date badge — frosted pill overlaid at bottom-left */}
        <div className="absolute bottom-3 left-3 lg:bottom-6 lg:left-6 flex items-center gap-1 lg:gap-2 px-2 py-2 lg:px-3 lg:py-2 rounded-2xl bg-white/10 backdrop-blur-sm shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]">
          <CalendarDays className="w-4 h-4 text-white flex-shrink-0" strokeWidth={1.5} />
          <span className="text-white text-xs lg:text-base font-medium tracking-wide whitespace-nowrap">{date}</span>
        </div>
      </div>

      {/* Title */}
      <div className="px-3 pt-4 pb-4 lg:px-6 lg:pt-8 lg:pb-2">
        <p className="text-base lg:text-[22px] font-medium text-[#2e2e2e] leading-snug lg:leading-[32px]">
          {title}
        </p>
      </div>
    </Link>
  )
}
