import * as React from 'react'
import './theme.css'

export interface IProps {
  children: JSX.Element
  theme?: string
}

const Theme = ({ children, theme = 'default' }: IProps) => {
  return (
    <div className={theme}>
      {children}
    </div>
  )
}

export default Theme
