import type { ComponentProps } from 'react'

const commonClassName = [
  'leading-tight font-extrabold mt-12 mb-6',
  '[h1+&]:mt-6',
  '[h2+&]:mt-6',
  '[h3+&]:mt-6',
  '[h4+&]:mt-6',
  '[h5+&]:mt-6',
  '[h6+&]:mt-6',
].join(' ')

export function H6({ children, id }: ComponentProps<'h6'>) {
  return (
    <h6 className={`text-[1rem] ${commonClassName}`} id={id}>
      <a className="underline-offset-2 hover:underline" href={`#${id}`}>
        {children}
      </a>
    </h6>
  )
}

export function H5({ children, id }: ComponentProps<'h5'>) {
  return (
    <h5 className={`text-[1.05rem] ${commonClassName}`} id={id}>
      <a className="underline-offset-2 hover:underline" href={`#${id}`}>
        {children}
      </a>
    </h5>
  )
}

export function H4({ children, id }: ComponentProps<'h4'>) {
  return (
    <h4 className={`text-[1.1rem] ${commonClassName}`} id={id}>
      <a className="underline-offset-2 hover:underline" href={`#${id}`}>
        {children}
      </a>
    </h4>
  )
}

export function H3({ children, id }: ComponentProps<'h3'>) {
  return (
    <h3 className={`text-[1.2rem] ${commonClassName}`} id={id}>
      <a className="underline-offset-2 hover:underline" href={`#${id}`}>
        {children}
      </a>
    </h3>
  )
}

export function H2({ children, id }: ComponentProps<'h2'>) {
  return (
    <h2 className={`text-[1.4rem] ${commonClassName}`} id={id}>
      <a className="underline-offset-2 hover:underline" href={`#${id}`}>
        {children}
      </a>
    </h2>
  )
}

export function H1({ children, id }: ComponentProps<'h1'>) {
  return (
    <h1 className={`text-[1.8rem] ${commonClassName}`} id={id}>
      <a className="underline-offset-2 hover:underline" href={`#${id}`}>
        {children}
      </a>
    </h1>
  )
}
