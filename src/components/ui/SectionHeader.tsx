import { ChevronsRight } from 'lucide-react'

interface SectionHeaderProps {
  breadcrumb: string
  heading: string
  subheading: string
  className?: string
}

export function SectionHeader({ breadcrumb, heading, subheading, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-10 lg:mb-14 ${className}`}>
       <div className="flex justify-center md:justify-normal items-center gap-1 text-muted text-xs font-medium mb-4 lg:mb-14">
            <ChevronsRight className="w-8 h-8  md:w-11 md:h-11 font-thin" />
            <span className='text-lg  font-medium'>{breadcrumb}</span>
          </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-end lg:justify-between gap-3 lg:gap-20">
        <h2 className="text-3xl lg:text-4xl text-center lg:text-left font-bold text-dark leading-tight max-w-xl">
          {heading}
        </h2>
        <p className="text-sm lg:text-base text-muted text-center lg:text-left leading-relaxed lg:max-w-lg">
          {subheading}
        </p>
      </div>
    </div>
  )
}
