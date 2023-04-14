import type React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | JSX.Element[] | string
}

export function Button ({ children, ...props }: ButtonProps): JSX.Element {
  return (
        <button {...props}>{children}</button>
  )
}
