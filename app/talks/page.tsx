import { type Metadata } from 'next'
import Image from 'next/image'
import { Card } from '@/_components/Card'
import { Section } from '@/_components/Section'
import { SimpleLayout } from '@/_components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
  image,
  slides,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
  image: StaticImageData | null
  slides: string | null
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description><Image src={image} alt={event} width={600} height={600} /></Card.Description>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

function AppearanceComingUp({
  title,
  description,
  date,
  cta,
  href,
}: {
  title: string
  description: string
  date: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{formatDate(date)}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'I\'ve spoken at events all around the world and been interviewed for many podcasts.',
}

import imageDjangoCon2023 from '@/images/talks/djangocon2023.jpg'
import imageSymfonyCon2023 from '@/images/talks/symfonycon2023.jpg'
import imageSymfonyCon2024 from '@/images/talks/symfonycon2024.jpg'
import imageAiSummit2025 from '@/images/talks/aisummit2025.jpg'
import { StaticImageData } from 'next/image'
import { formatDate } from '@/lib/formatDate'

export default function Speaking() {
  return (
    <SimpleLayout
      title="I've spoken at events all around the world and been interviewed for many podcasts."
      intro="One of my favorite ways to share my ideas is live on stage, where there's so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
    >
      <div className="space-y-20">
        <SpeakingSection title="Coming Up">
          <AppearanceComingUp
            href="https://www.dotjs.io/"
            title="DotJS 2025: The world's sharpest Javascript conference"
            description="Sustainability is a real competitive advantage, not just a nice-to-have. Integrating it early makes businesses stronger and more resilient, and infrastructure plays a key role in driving sustainable growth. "
            date="2025-04-03"
            cta="View website"
          />
          <AppearanceComingUp
            href="https://live.symfony.com/2025-paris/"
            title="SymfonyLive Paris 2025"
            description="Partagez vos bonnes pratiques, votre expérience et vos connaissances sur Symfony."
            date="2025-03-25"
            cta="View website"
          />
          <AppearanceComingUp
            href="https://www.meet-magento.com/meet-magento-france-march-25-2025/"
            title="Meet Magento France"
            description="A day filled with discussions, experience sharing, and exploration of the latest innovations around Magento and Adobe Commerce."
            date="2025-03-25"
            cta="View website"
          />
        </SpeakingSection>
        <SpeakingSection title="Conferences">
          <Appearance
            href="https://www.youtube.com/watch?v=qK5fhZosX04"
            title="Building VC-ready AI companies "
            description="Sustainability is a real competitive advantage, not just a nice-to-have. Integrating it early makes businesses stronger and more resilient, and infrastructure plays a key role in driving sustainable growth. "
            event="AI Action Summit 2025"
            image={imageAiSummit2025}
            slides="/pdfs/SymfonyCon2024Vienna.pdf"
            cta="Watch video"
          />
          <Appearance
            href="https://youtu.be/3YWdj0yqtzo"
            title="Machine Learning Inference in PHP by example: leverage ONNX and Transformers on Symfony"
            description="Whether you're an AI enthusiast or a developer curious about machine learning, this session will equip you with the knowledge to implement ML inference in your Symfony applications. This talk will show by example how to implement ONNX (Open Neural Network Exchange) and Transformer models to bring advanced AI capabilities to your Symfony projects."
            event="SymfonyCon 2024"
            image={imageSymfonyCon2024}
            slides="/pdfs/SymfonyCon2024Vienna.pdf"
            cta="Watch video"
          />
          <Appearance
            href="https://www.youtube.com/watch?v=FEFBUomV5aY"
            title="Deploying a decoupled Symfony + Next.js app on Upsun"
            description="Deploying an app for the first time is always daunting. It does not need to be. We will setup a quick ChatGPT client based on a Symfony REST API and a React frontend. These app will be deployed to Upsun where we will analyze some performance bottlenecks and scale the infrastructure appropriately based on these findings."
            event="SymfonyCon 2023"
            image={imageSymfonyCon2023}
            slides=""
            cta="Watch video"
          />
          <Appearance
            href="https://www.youtube.com/watch?v=ot9ULcAF2p0"
            title="Deploying a decoupled Symfony + Next.js app on Upsun"
            description="Deploying an app for the first time is always daunting. It does not need to be. We will setup a quick ChatGPT client based on a Symfony REST API and a React frontend. These app will be deployed to Upsun where we will analyze some performance bottlenecks and scale the infrastructure appropriately based on these findings."
            event="SymfonyCon 2023"
            image={imageDjangoCon2023}
            slides="/pdfs/DjangoCon2023.pdf"
            cta="Watch video"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
