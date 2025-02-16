import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/_components/Container'
import {
  BlueSkyIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/_components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-red-500 dark:text-zinc-200 dark:hover:text-red-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-red-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About Guillaume',
  description:
    "I'm Guillaume Moigneu. Principal Technology Advocate at Upsun, a cloud applications platform dedicated to simplifying application deployment and operations. With a focus on AI and Sustainability, I strive to make running apps seamless for every developer.",
  keywords: "Guillaume Moigneu, Principal Technology Advocate, Upsun, AI, Sustainability, Technology",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Guillaume Moigneu, aka G/.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Hey there. I am a <strong>Principal Advocate at Upsun</strong>, a leading cloud application platform. My journey is fueled by a passion for two transformative fields: <strong>artificial intelligence (AI) and sustainability in cloud infrastructure</strong>.
            </p>
            <p>
              At Upsun, I&apos;ve recently dived deep into AI, driven by the excitement of exploring and implementing cutting-edge solutions. I firmly believe that AI can revolutionize our ecosystem, from enhancing user experiences with intelligent systems to developing predictive models that drive innovation and efficiency. My work in AI is all about pushing technological boundaries and keeping Upsun at the forefront of advancement.
            </p>
            <p>
              Alongside AI, I&apos;m deeply committed to making cloud infrastructure more sustainable. As the demand for cloud services grows, so does the need for environmentally responsible practices. I focus on integrating sustainable strategies into our operations, aiming to reduce carbon footprints and promote energy efficiency. This includes optimizing cloud resources, adopting renewable energy sources, and advocating for green technologies. My goal is to create a future where technological progress and environmental stewardship go hand in hand.
            </p>
            <p>
              Beyond my professional roles, I&apos;m an avid learner who loves launching side projects to test new ideas and technologies. This constant exploration keeps me at the cutting edge of the tech industry. Originally from France, I now call Texas my home, where I continue to pursue my passions for AI, sustainability, and continuous learning.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://bsky.app/profile/nls.io" icon={BlueSkyIcon}>
              Follow on BlueSky
            </SocialLink>
            <SocialLink href="https://github.com/gmoigneu" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/guillaumemoigneu/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:g@guillaume.id"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              g@guillaume.id
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
