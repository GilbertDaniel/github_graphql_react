import React, { useEffect, useState } from 'react'
import RepoInfoComponent from './components/RepoInfoComponent.js';
import github from './db.js';
import { githubOptions, fetchData } from './utils/fetchData';
const App = () => {
  const [userName, setUserName] = useState("")
  const [repoData, setRepoData] = useState([])

  useEffect(() => {
    const fetchGitHubData = async () => {
      const githubData = await fetchData(`${github.baseURL}`, githubOptions);
      setRepoData(githubData.data.search.nodes)
      setUserName(githubData.data.viewer.name)
    }

    fetchGitHubData()
  }, [])
  return (
    <div className='container mt-5'>
      <h1 className='text-primary'>
        <i className='bi bi-diagram-2-fill'>Repos</i>
      </h1>
      <p>Hey there {userName}</p>
      <RepoInfoComponent repos={repoData}/>
      {/* <ul className='list-group list-group-flush'>
        {
          repoData.map((item) => {
            return (
              <li className='list-group-item' key={item.id.toString()}>
                <a className='h5 mb-0 text-decoration-none' href={item.url}>
                  {item.name}
                </a>
                <p className='small'>{item.description}</p>
              </li>
            )
          })
        }
      </ul> */}
    </div>
  )
}

export default App