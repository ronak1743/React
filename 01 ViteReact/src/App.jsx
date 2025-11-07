import Hello from './Hello.jsx'
import React from 'react'

const element1=(
        <a href='https://chatgpt.com/c/690ddda3-b594-8323-8f83-bb2d09088027'>chatgpt</a>
)

const elementReact=React.createElement(
  'a',
  {
    href:'https://chatgpt.com/c/690ddda3-b594-8323-8f83-bb2d09088027',
  },
  'chatgpt'
)
function App() {
  return (
    // element1
    elementReact
    
  )
}

export default App
