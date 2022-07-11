import React, { useEffect } from 'react'
import github from './db.js';
const App = () => {
  useEffect(() => {
    const githubQuery = {
      query: `
      {
        viewer {
          name
        }
      } 
      `,
    };
    fetch(github.baseURL, {
      method: "POST",
      headers: github.headers,
      body: JSON.stringify(githubQuery),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div className='container mt-5'>
      <h1 className='text-primary'>
        <i className='bi bi-diagram-2-fill'>Repos</i>
      </h1>
    </div>
  )
}

export default App