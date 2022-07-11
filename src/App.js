import React, { useEffect, useState, useCallback } from 'react'
import github from './db.js';
import query from './Query.js';
const App = () => {
  const [userName, setUserName] = useState("")

  const fetchData = useCallback(() => {
    fetch(github.baseURL, {
      method: "POST",
      headers: github.headers,
      body: JSON.stringify(query),
    })
      .then(response => response.json())
      .then(data => {
        setUserName(data.data.viewer.name)
        console.log(userName)
      })
      .catch(err => {
        console.log(err)
      })
  })

  useEffect(() => {
    fetchData()
  }, [fetchData])
  return (
    <div className='container mt-5'>
      <h1 className='text-primary'>
        <i className='bi bi-diagram-2-fill'>Repos</i>
      </h1>
      <p>Hey there {userName}</p>
    </div>
  )
}

export default App