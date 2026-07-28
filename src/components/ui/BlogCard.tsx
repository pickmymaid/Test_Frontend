import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays } from 'lucide-react'
import { WaveRight } from './OutlineButton'

export type BlogCardProps = {
  image: string
  date: string
  title: string
  href?: string
}

export function BlogCard({ image, date, title, href = '#' }: BlogCardProps) {
  return (
    <Link href={href} className="group flex flex-col bg-transparent">
      {/* Image — date badge overlaid bottom-left, shrinks on hover to reveal Read More */}
      <div className="relative h-[250px] sm:h-[400px] lg:h-[340px] lg:group-hover:h-[280px] overflow-hidden rounded-3xl flex-shrink-0 transition-[height] duration-300 ease-out">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-3 left-3 lg:bottom-5 lg:left-5 flex items-center gap-1.5 lg:gap-2 px-3 py-2 lg:px-4 lg:py-2.5 rounded-full bg-black/25 backdrop-blur-md shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)] transition-opacity duration-300 group-hover:opacity-0">
          <CalendarDays className="w-4 h-4 text-white flex-shrink-0" strokeWidth={1.5} />
          <span className="text-white text-xs lg:text-sm font-medium tracking-wide whitespace-nowrap">{date}</span>
        </div>
      </div>

      {/* Text — title + Read More (reveals on hover) */}
      <div className="flex flex-col gap-3 px-1 pt-4 pb-4 lg:px-4 xl:px-10 lg:pt-6 lg:pb-6">
        <p className="text-base lg:text-[22px] xl:text-[21px]  font-semibold text-[#2e2e2e] leading-snug lg:leading-[32px]">
          {title}
        </p>
        {/* Read More — slides up from the bottom on hover */}
        <span className="mt-1 hidden lg:flex w-max items-stretch lg:opacity-0 lg:translate-y-3 transition-all duration-300 ease-out lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
          <span className="flex-1 text-center border-t-[1.5px] border-l-[1.5px] border-b-[1.5px] border-[#b5b5b5] rounded-tl-2xl rounded-bl-2xl pl-4 pr-1 py-3 flex items-center justify-center text-dark text-sm font-semibold">
            Read More
          </span>
          <span className="-ml-px">
            <WaveRight stroke="#b5b5b5" />
          </span>
        </span>
      </div>
    </Link>
  )
}
