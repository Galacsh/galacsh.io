import Link from 'next/link'

import type { ComponentProps } from 'react'

export function Anchor({ href, children }: ComponentProps<'a'>) {
  const className =
    'font-medium text-active hover:text-active-foreground underline underline-offset-2'

  // External link
  if (href == null || href.includes('://')) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <Link href={internalLink(href)} className={className}>
      {children}
    </Link>
  )
}

function internalLink(href: string) {
  const isPrefixed = ['/', '/posts', 'posts/'].includes(href)
  let slug = href.split('/')
  if (!isPrefixed) {
    slug.unshift('/posts')
    slug = slug.filter((s) => s !== '')
  }
  const joined = slug.join('/')
  return joined.startsWith('/') ? joined : `/${joined}`
}
