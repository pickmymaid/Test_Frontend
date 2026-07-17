import Image from "next/image";
import {
  Search,
  SlidersHorizontal,
  MessageSquare,
  FileCheck,
  UserCheck,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import { ChevronsRight } from "lucide-react";
import { InterviewCategoryCard } from "./InterviewCategoryCard";

const interviewCategories = [
  {
    letter: "A",
    title: "Basic Information",
    imageSrc: "/images/hiring-tips/basic-info.webp",
    questions: [
      "Can you share a bit about your background and what led you to choose this profession?",
      "What types of games or educational activities do you find most effective when caring for children?",
      "What motivates you to continue working in childcare or housekeeping?",
      "What aspects of being a nanny/maid do you find most rewarding, and what challenges do you face?",
      "How do you feel about caring for pets or helping with pet-related tasks?",
      "What are your personal hobbies or interests outside of work?",
      "What is your stance on smoking and alcohol consumption, especially around children?",
      "Do you practice any particular beliefs or values that influence how you approach family care?",
      "In your past experiences, what additional household tasks have you found fulfilling while caring for children? Are there tasks you're not comfortable doing?",
      "Are there any medical conditions or allergies that we should be aware of for safety purposes?",
      "What are some of the life lessons you have learned from your experiences as a nanny/maid?",
      "How do you manage work-life balance, especially in a demanding household environment?",
      "What kind of environment do you think is most conducive to a child's development?",
      "Have you ever had to deal with a stressful situation while on the job? How did you handle it?",
      "How do you like to maintain a positive and nurturing atmosphere in the household?",
      "Do you have any certifications or training that would enhance your role as a nanny or maid?",
      "What methods do you use to communicate effectively with both children and parents?",
      "How do you handle disagreements with parents about childcare routines or household management?",
      "In your view, what qualities make a great nanny/maid?",
      "What is one thing you wish families understood about your role?",
    ],
  },
  {
    letter: "B",
    title: "Work History",
    imageSrc: "/images/hiring-tips/work-history.webp",
    questions: [
      "What inspired you to pursue a career as a nanny or maid, and how has your journey been?",
      "Can you describe your experience with different age groups? Which age group do you find most enjoyable to work with and why?",
      "What previous roles or jobs have you held that contribute to your qualifications as a nanny or maid?",
      "Do you have any specialized training or skills related to childcare, such as early childhood education?",
      "How do you prioritize and manage your responsibilities when caring for multiple children or running a household?",
      "Can you provide an example of how you've handled an emergency situation, such as a child getting hurt?",
      "What is your approach to managing children's behavior and setting boundaries?",
      "How do you keep children engaged and active throughout the day?",
      "Can you explain your methodology for preparing healthy meals for children?",
      "What strategies do you use to communicate effectively with parents about their children's needs?",
      "How do you adapt your care style to suit different family dynamics or parenting philosophies?",
      "What safety protocols do you follow to ensure children are protected during daily activities?",
      "How do you handle conflicts or disagreements between siblings when supervising them?",
      "Have you ever created a structured schedule or daily routine for children? If so, what did it include?",
      "What types of household management tasks are you comfortable handling in addition to childcare?",
      "How do you stay organized when managing household chores, errands, and child care?",
      "What do you consider the most essential skills for effectively caring for children?",
      "How do you approach introducing new activities or learning experiences into a child's daily routine?",
      "What experience do you have with special needs children, if any?",
      "How do you keep updated with best practices for child care, safety, and nutrition?",
    ],
  },
  {
    letter: "C",
    title: "Attitude and Personality",
    imageSrc: "/images/hiring-tips/attitude.webp",
    questions: [
      "What qualities do you think are essential for building a positive relationship with children?",
      "How do you envision your ideal working environment, and what role does communication play in it?",
      "What aspects of childcare or housekeeping do you find most fulfilling, and why?",
      "How do you respond to constructive criticism about your caregiving techniques or household responsibilities?",
      "What strategies do you use to adapt to feedback from parents while maintaining your own style?",
      "How do you engage children who are hesitant or shy to participate in activities?",
      "What types of behaviors from parents or children would challenge your patience, and how would you handle them?",
      "Can you share an experience where you successfully navigated a challenging house rule?",
      "How do you recharge after a long day of work while ensuring you're ready for the next day?",
      "What does discipline mean to you, and how do you implement it in your interactions with children?",
      "How do you stay motivated during particularly busy or difficult days?",
      "What techniques do you use to foster a sense of independence in children while ensuring their safety?",
      "How would you approach a situation where a child is upset and refuses to talk?",
      "What role do you think humor plays in working with children and maintaining a positive atmosphere?",
      "How do you handle situations where a child refuses to follow instructions or routines?",
      "What do you believe is the most important lesson you can teach a child during your time with them?",
      "How do you ensure that children feel heard and respected in challenging situations?",
      "What type of feedback do you appreciate most from parents, and how do you apply it to your work?",
      "How do you approach setting expectations and boundaries for children in your care?",
      "What do you think makes a great partnership between caregivers and families?",
    ],
  },
  {
    letter: "D",
    title: "Decision Making",
    imageSrc: "/images/hiring-tips/decision-making.webp",
    questions: [
      "If the child refuses to eat, how would you handle it?",
      "If the baby gets injured while playing, what would be your first reaction?",
      "How do you handle conflicts with other staff or family members?",
      "What would you do if you're running late to work or cannot make it on a particular day?",
    ],
  },
  {
    letter: "E",
    title: "Key Points",
    imageSrc: "/images/hiring-tips/key-points.webp",
    questions: [
      "Are you available to work full-time/part-time/live-in/live-out?",
      "Are you comfortable traveling with the family if required?",
      "Do you have any dietary restrictions or cultural considerations we should respect?",
      "Do you have references from previous employers?",
      "What is your expected salary?",
    ],
  },
];

const tips: {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    number: "01",
    icon: Search,
    title: "Browse Listings",
    description:
      "Explore available maid or nanny profiles on Pickmymaid based on your specific need (eg., childcare, cleaning, live-in/live-out preference).",
  },
  {
    number: "02",
    icon: SlidersHorizontal,
    title: "Filter Candidates",
    description:
      "Customise your search by filtering candidates based on experience, location, skills, availability to match your requirements.",
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Conduct Interviews",
    description:
      "Ask relevant questions to understand their work history, expectation, and how they handle various household situations, ensuring they align with your needs.",
  },
  {
    number: "04",
    icon: FileCheck,
    title: "Check References",
    description:
      "Request and verify references from previous employers to confirm the candidate's reliability, work ethic, and character before making a decision.",
  },
  {
    number: "05",
    icon: UserCheck,
    title: "Verify Documents",
    description:
      "Ensure all identification, visa status, and work permit documents are valid and up to date. Pickmymaid profiles display visa status for your convenience.",
  },
  {
    number: "06",
    icon: Handshake,
    title: "Finalise the Hire",
    description:
      "Once you're confident in your choice, agree on terms, salary, and start date. Proceed with sponsorship and any required paperwork at your own pace.",
  },
];

/* ── Step card ─────────────────────────────────────────────────── */

function StepCard({
  tip,
  reversed,
}: {
  tip: (typeof tips)[0];
  reversed: boolean;
}) {
  const Icon = tip.icon;

  return (
    <>
      {/* Desktop */}
      <div
        className={`hidden lg:flex items-center gap-6 ${reversed ? "flex-row-reverse" : ""}`}
      >
        {/* Number + title block */}
        <div
          className={`flex items-start gap-4 w-[260px] xl:w-[300px] shrink-0 ${reversed ? "flex-row-reverse text-right" : ""}`}
        >
          <div
            className={`w-[3px] self-stretch bg-primary rounded-full shrink-0 ${reversed ? "order-last" : ""}`}
          />
          <div className={`flex flex-col gap-1 ${reversed ? "items-end" : ""}`}>
            <span className="text-[56px] font-bold text-primary leading-none tracking-[-1px]">
              {tip.number}
            </span>
            <h3 className="text-xl font-semibold text-dark tracking-[0.25px]">
              {tip.title}
            </h3>
          </div>
        </div>

        {/* Description card */}
        <div className="flex-1 bg-[#EDF2F7] rounded-2xl px-6 py-5">
          <p className="text-sm text-dark/70 leading-relaxed tracking-[0.25px]">
            {tip.description}
          </p>
        </div>

        {/* Icon box */}
        <div className="w-[80px] h-[80px] xl:w-[96px] xl:h-[96px] bg-primary-50 rounded-2xl flex items-center justify-center shrink-0">
          <Icon
            className="w-8 h-8 xl:w-10 xl:h-10 text-primary"
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex lg:hidden flex-col gap-3">
        <div
          className={`flex items-start gap-3 ${reversed ? "flex-row-reverse" : ""}`}
        >
          <div className="w-[3px] self-stretch bg-primary rounded-full shrink-0" />
          <div
            className={`flex flex-col gap-0.5 ${reversed ? "items-end" : ""}`}
          >
            <span className="text-[40px] font-bold text-primary leading-none tracking-[-1px]">
              {tip.number}
            </span>
            <h3 className="text-base font-semibold text-dark tracking-[0.25px]">
              {tip.title}
            </h3>
          </div>
        </div>
        <div className="bg-[#EDF2F7] rounded-2xl px-5 py-4">
          <p className="text-sm text-dark/70 leading-relaxed tracking-[0.25px]">
            {tip.description}
          </p>
        </div>
      </div>
    </>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */

export function HiringTipsPage() {
  return (
    <>
      {/* Banner */}
      <section
        className="relative bg-white overflow-hidden py-26 lg:py-32"
        aria-label="Key Tips for Hiring"
      >
        <div
          className="absolute right-[-120px] top-[-80px] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #FFDDD0 0%, #FFF0EB 45%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute left-[-160px] bottom-[-120px] w-[480px] h-[480px] rounded-full pointer-events-none opacity-60"
          style={{
            background: "radial-gradient(circle, #FFF0EB 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-16 relative">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="flex justify-center items-center gap-1 text-muted text-xs font-medium mb-4 lg:mb-6">
              <ChevronsRight className="w-4 h-4" />
              <span>Hiring Guide</span>
            </div>

            {/* Heading with orange wavy underline */}
            <div className="relative inline-block">
              <h1 className="text-[32px] lg:text-[56px] font-bold leading-[42px] lg:leading-[64px] tracking-[-0.5px] lg:tracking-[-1.5px] text-dark">
                Key Tips for{" "}
                <span className="relative inline-block">
                  Hiring
                  <svg
                    viewBox="0 0 120 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -bottom-1 left-0 w-full"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 9 C20 3, 40 11, 60 5 C80 -1, 100 9, 118 4"
                      stroke="#FF7442"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            <p className="mt-6 lg:mt-8 text-sm lg:text-base text-dark/70 leading-relaxed tracking-[0.25px] max-w-2xl">
              To make your search for the right maid or nanny through Pickmymaid
              as efficient as possible, follow these straightforward steps. This
              approach helps you quickly identify candidates that meet your
              specific needs and preferences.
            </p>
            <p className="mt-3 text-sm lg:text-base text-dark/70 leading-relaxed tracking-[0.25px] max-w-2xl">
              Below are some essential interview tips to guide you in selecting
              the perfect maid or nanny.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 lg:py-20 bg-[#F5F5F5]" aria-label="Hiring Tips">
        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col gap-6 lg:gap-8 max-w-4xl mx-auto">
            {tips.map((tip, i) => (
              <StepCard key={tip.number} tip={tip} reversed={i % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Interview guide feature section */}
      <section className="py-12 lg:py-20 bg-white" aria-label="Interview Guide">
        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14 max-w-5xl mx-auto">
            {/* Image */}
            <div className="w-full lg:w-[45%] shrink-0">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-[#E8E8E8]">
                <Image
                  src="/images/interview-tips.webp"
                  alt="Interview Tips — professional nanny holding interview tips sign"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-4 lg:gap-6">
              <h2 className="text-[24px] lg:text-[36px] font-bold leading-[32px] lg:leading-[46px] tracking-[-0.5px] lg:tracking-[-1px] text-dark">
                Finding the Perfect Fit: A Guide to Interviewing Your Nanny or
                Maid!
                {/* Orange wavy underline */}
                <span className="block mt-1">
                  <svg
                    viewBox="0 0 200 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-32 lg:w-44 h-auto"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 7 C30 2, 60 9, 100 4 C140 -1, 170 8, 198 4"
                      stroke="#FF7442"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-sm lg:text-base text-dark/70 leading-relaxed tracking-[0.25px]">
                Finding the right nanny or maid for your family is an important
                decision that requires careful consideration and understanding.
                This guide will assist you in conducting a thorough interview to
                uncover essential insights about potential candidates. By
                exploring various aspects such as basic information, work
                history, attitude and personality, decision-making skills, and
                key points, you can ensure that you select someone who not only
                meets your family's practical needs but also aligns with your
                values and expectations. Ultimately, this process will help you
                identify the right match for your family, fostering a harmonious
                environment for both caregivers and children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview question categories */}
      <section className="py-12 lg:py-20 bg-[#F5F5F5]" aria-label="Interview Questions">
        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col gap-6 lg:gap-8 max-w-4xl mx-auto">
            {interviewCategories.map((cat) => (
              <InterviewCategoryCard
                key={cat.letter}
                letter={cat.letter}
                title={cat.title}
                questions={cat.questions}
                imageSrc={cat.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Page footer note */}
      <section className="py-10 lg:py-14 bg-white border-t border-black/5" aria-label="Page Footer">
        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-16">
          <div className="max-w-4xl mx-auto flex flex-col gap-5 text-center">
            <p className="text-sm lg:text-base text-dark/70 leading-relaxed tracking-[0.25px]">
              This guide offers essential interview questions; explore the FAQ
              section for additional tips to ensure you find the perfect Maid or
              Nanny.
            </p>

            <div className="w-12 h-px bg-black/10 mx-auto" />

            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold text-dark/50 tracking-[0.5px]">
                © 2026 Pickmymaid — All Rights Reserved.
              </p>
              <p className="text-xs text-dark/40 leading-relaxed tracking-[0.25px] max-w-2xl mx-auto">
                All contents including text, images, logos, profiles and data on
                this website is the property of Pickmymaid and protected by
                copyright laws. Unauthorized use, reproduction or distribution
                is strictly prohibited. Scraping, data mining or copying content
                without permission may result in legal action. For permissions
                or copyright concerns, contact{" "}
                <a
                  href="mailto:support@pickmymaid.com"
                  className="text-primary hover:underline"
                >
                  support@pickmymaid.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
