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
    <div className="flex flex-col gap-3 items-center lg:items-start">
      <div className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center bg-white flex-shrink-0">
        <Icon className="w-5 h-5 text-dark" strokeWidth={1.5} />
      </div>
      <p className="text-sm font-semibold text-primary text-center lg:text-left">{title}</p>
      <p className="text-sm text-muted leading-relaxed text-center max-w-[80%] sm:max-w-[100%] lg:text-left">{description}</p>
    </div>
  )
}


export function WhyChooseUsSection() {
  return (
    <section className="py-12 lg:py-20 bg-[#FAFAFA]" aria-label="Why Choose Us">
      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-16">
        <SectionHeader
          breadcrumb="Why Choose Us"
          heading="Why UAE Families Trust Pickmymaid"
          subheading="Choosing the right person for your home is not something you take lightly. Every maid and nanny profile on our platform goes through a proper screening process before it goes live. Here is what we do to make sure you hire with confidence."
        />

        {/* Desktop: 3-column layout */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_320px_1fr] gap-12 xl:gap-20 items-center">
          <div className="flex flex-col gap-8">
            {leftFeatures.map(f => (
              <FeatureItem key={f.title} icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>

          <div className="relative w-full aspect-[5/6] rounded-3xl overflow-hidden">
            <Image
              src="/images/home/why-pickmymaid.png"
              alt="Professional verified maid"
              fill
              sizes="320px"
              className="object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-8">
            {rightFeatures.map(f => (
              <FeatureItem key={f.title} icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>
        </div>

        {/* Mobile: image on top, features below */}
        <div className="lg:hidden">
          <div className="relative w-full aspect-[5/6] rounded-3xl overflow-hidden mb-10">
            <Image
              src="/images/home/why-pickmymaid.png"
              alt="Professional verified maid"
              fill
              sizes="100vw"
              className="object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-6 items-center">
            {[...leftFeatures, ...rightFeatures].map(f => (
              <FeatureItem key={f.title} icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
