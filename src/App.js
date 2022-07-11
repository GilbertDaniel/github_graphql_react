import React, { useEffect, useState, useCallback } from 'react'
import github from './db.js';
import query from './Query.js';
import ReposComponent from './components/ReposComponent';
const App = () => {
  let [userName, setUserName] = useState("")
  let [repoList, setRepoList] = useState([])

  const fetchData = useCallback(() => {
    fetch(github.baseURL, {
      method: "POST",
      headers: github.headers,
      body: JSON.stringify(query),
    })
      .then(response => response.json())
      .then(data => {
        const viewer = data.data.viewer
        setUserName(viewer.name)
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
      <ReposComponent/>
    </div>
  )
}

export default App