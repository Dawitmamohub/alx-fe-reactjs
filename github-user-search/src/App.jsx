import React from 'react'
import Search from './components/Search'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">GitHub User Search</h1>
      <Search />
    </div>
  )
}

export default App
