import React, { ReactNode } from "react"

export type ButtonProps = {
  children: ReactNode,
  onClick: () => void
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <button onClick={() => {
    console.log('button')
    onClick()
  }}>{children}</button>
}

export default Button