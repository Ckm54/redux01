import { useState } from 'react'
import PostList from './features/post/PostList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App">
      <PostList />  
    </main>
  )
}

export default App
