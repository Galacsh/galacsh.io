import type { ComponentProps } from 'react'

export function Paragraph({ children }: ComponentProps<'p'>) {
  return <p className="mb-6 break-words break-keep leading-8">{children}</p>
}
