'use client'

import { useState, useEffect } from 'react'

export default function TestPage() {
  const [count, setCount] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    console.log('Test page mounted')
    setTimeout(() => {
      setLoaded(true)
      setCount(5)
    }, 1000)
  }, [])

  if (!loaded) {
    return <div className="p-8">Loading test page...</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Page</h1>
      <p>Count: {count}</p>
      <p>Loaded: {loaded ? 'Yes' : 'No'}</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Increment
      </button>
    </div>
  )
}
