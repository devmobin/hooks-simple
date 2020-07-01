import React, { useState } from 'react'
import ResourceList from './ResourceList'
import UserList from './UserList'

function App() {
  const [resource, setResource] = useState('posts')

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  )
}

export default App
