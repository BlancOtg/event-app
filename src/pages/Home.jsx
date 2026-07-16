import GreetingCard from '../components/GreetingCard'
import { useState} from 'react'
import Button from '../components/Button'

const Home = () => {

  const [counter, setCounter] = useState(0)

  return (
    
    <div>
      <GreetingCard />

      <div className='p-2'>
        <h1>Counter: {counter}</h1>
        <span className='flex gap-2 justify-center top-2'>
          <Button onClick={() => setCounter(counter + 1)}>Increment</Button>
          <Button onClick={() => setCounter(counter - 1)}>Decrement</Button>
        </span>
      </div>
    </div>


  )
}

export default Home
