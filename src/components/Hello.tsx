import * as React from 'react'
import './hello.css'

export interface IProps {
  name: string
  level?: number
}

const counter = (count: number) => {
  return Array(count + 1).join('!')
}

const Hello = ({ name, level = 1 }: IProps) => {
  if (level <= 0) {
    throw new Error('bye-bye')
  }

  return (
    <div className="hello">
      Hello {name + counter(level)}
    </div>
  )
}

export default Hello
