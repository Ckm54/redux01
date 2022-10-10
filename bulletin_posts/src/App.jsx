import { useState } from 'react'
import AddPostForm from './features/post/AddPostForm'
import PostsList from './features/post/PostsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App">
      <AddPostForm />
      <PostsList />  
    </main>
  )
}

export default App
