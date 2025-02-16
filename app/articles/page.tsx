import { type Metadata } from 'next'

import { Card } from '@/_components/Card'
import { SimpleLayout } from '@/_components/SimpleLayout'
import { getArticles } from './get-articles'
import { formatDate } from '@/lib/formatDate'
import { Item } from 'nextra/normalize-pages'
import { Link } from 'next-view-transitions'

function Article({ article }: { article: Item }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Link href={article.route}>
        <Card className="md:col-span-3">
          <Card.Title>
            {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.frontMatter.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.frontMatter.date)}
        </Card.Eyebrow>
        <Card.Description>{article.frontMatter.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.frontMatter.date}
        className="mt-1 hidden md:block"
      >
          {formatDate(article.frontMatter.date)}
        </Card.Eyebrow>
      </Link>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function ArticlesIndex() {
  const articles = await getArticles()

  return (
    <SimpleLayout
      title="Writing on software design, company building, and the aerospace industry."
      intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.route} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
