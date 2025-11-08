
import './App.css'
import Card from './Components/Card.jsx'

function App() {
  

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Hello from Tailwind</h1>
      <Card title="Title1 " data="This is data for card 1" btntxt='Read'/>
      <Card title="Title2 " data="This is data for card 2"/>

      </>
  )
}

export default App
