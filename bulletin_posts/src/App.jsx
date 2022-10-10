import { useState } from 'react'
import PostsList from './features/post/PostsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App">
      <PostsList />  
    </main>
  )
}

export default App
