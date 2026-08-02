import Image from 'next/image'
import { BadgeCheck, ClipboardCheck, ScanLine, ShieldCheck, HandCoins, Trophy, Landmark, Newspaper, type LucideIcon } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'

const leftFeatures: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: BadgeCheck,
    title: 'Verified Worker Profiles',
    description: 'Real domestic helper profiles with complete details',
  },
  {
    icon: ClipboardCheck,
    title: 'HR-Screened Candidates',
    description: 'Each candidate is reviewed by our HR team',
  },
  {
    icon: ScanLine,
    title: 'Identity Verification Checks',
    description: 'Documents are checked before approval',
  },
  {
    icon: ShieldCheck,
    title: 'Background Screening',
    description: 'Profiles are reviewed before going live',
  },
]

const rightFeatures: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: HandCoins,
    title: 'No Hidden Charges',
    description: 'Transparent and straightforward pricing',
  },
  {
    icon: Trophy,
    title: '5,900+ Successful Placements',
    description: 'Trusted by families across the UAE',
  },
  {
    icon: Landmark,
    title: 'SHAMS Registered Platform',
    description: 'Fully compliant UAE-based platform',
  },
  {
    icon: Newspaper,
    title: 'Featured in Khaleej Times',
    description: 'Recognized by a leading UAE publication',
  },
]

function FeatureItem({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <div className="group flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-[0px_8px_24px_0px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-primary/30 hover:shadow-[0px_16px_32px_0px_rgba(255,116,66,0.12)] hover:-translate-y-1">
      <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary">
        <Icon className="w-5 h-5 text-primary transition-colors duration-300 group-hover:text-white" strokeWidth={1.75} />
      </div>
      <div className="flex flex-col gap-1 min-w-0">
        <p className="text-sm lg:text-base font-semibold text-dark">{title}</p>
        <p className="text-xs lg:text-sm text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

function ShowcaseImage({ className = '', sizes }: { className?: string; sizes: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative w-full aspect-[5/6] rounded-3xl overflow-hidden shadow-[0px_24px_48px_0px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
        <Image
          src="/images/home/why-pickmymaid.png"
          alt="Professional verified maid"
          fill
          sizes={sizes}
          className="object-cover object-top"
          loading="lazy"
        />
      </div>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-2xl shadow-[0px_19px_40px_0px_rgba(0,0,0,0.08)] px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
          <Trophy className="w-4.5 h-4.5 text-primary" strokeWidth={1.75} />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold text-dark leading-none">5,900+</p>
          <p className="text-[11px] text-muted mt-1 whitespace-nowrap">Families served across UAE</p>
        </div>
      </div>
    </div>
  )
}

export function WhyChooseUsSection() {
  return (
    <section className="py-12 lg:py-20 bg-[#FAFAFA]" aria-label="Why Choose Us">
      <div className="max-w-[1900px] mx-auto px-4 sm:px-6 lg:px-20">
        <SectionHeader
          breadcrumb="Why Choose Us"
          heading="Why UAE Families Trust Pickmymaid"
          subheading="Choosing the right person for your home is not something you take lightly. Every maid and nanny profile on our platform goes through a proper screening process before it goes live. Here is what we do to make sure you hire with confidence."
        />

        {/* Desktop: 3-column layout */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_240px_1fr] xl:grid-cols-[1fr_320px_1fr] gap-6 xl:gap-20 items-center">
          <div className="flex flex-col gap-4 min-w-0">
            {leftFeatures.map(f => (
              <FeatureItem key={f.title} icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>

          <ShowcaseImage sizes="(min-width: 1280px) 320px, 240px" />

          <div className="flex flex-col gap-4 min-w-0">
            {rightFeatures.map(f => (
              <FeatureItem key={f.title} icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>
        </div>

        {/* Mobile: image on top, features below */}
        <div className="lg:hidden">
          <ShowcaseImage className="mb-16" sizes="100vw" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[...leftFeatures, ...rightFeatures].map(f => (
              <FeatureItem key={f.title} icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
