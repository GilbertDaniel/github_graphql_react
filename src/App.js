import React, { useEffect, useState } from 'react'
import RepoInfoComponent from './components/RepoInfoComponent.js';
import github from './db.js';
import query from './Query.js';
import { fetchData } from './utils/fetchData';
const App = () => {
  const [userName, setUserName] = useState("")
  const [repoData, setRepoData] = useState([])
  const [pageCount, setPageCount] = useState(10)
  const [queryString, setQueryString] = useState("slides")
  const [totalCount, setTotalCount] = useState(null)

  const queryText = JSON.stringify(query(pageCount, queryString))
  const githubOptions = {
    method: "POST",
    headers: github.headers,
    body: queryText,
};

  useEffect(() => {
    const fetchGitHubData = async () => {
      const githubData = await fetchData(`${github.baseURL}`, githubOptions);
      const total = githubData.data.search.repositoryCount
      setTotalCount(total)
      setRepoData(githubData.data.search.nodes)
      setUserName(githubData.data.viewer.name)
    }

    fetchGitHubData()
  }, [pageCount, queryString])
  return (
    <div className='container mt-5'>
      <h1 className='text-primary'>
        <i className='bi bi-diagram-2-fill'>Repos</i>
      </h1>
      <p>Hey there {userName}</p>
      <p>
        <b>Search for :</b> {queryString} | <b>Item per page :</b> {pageCount} | <b>Total results :</b> {totalCount}
      </p>
      <RepoInfoComponent repos={repoData}/>
    </div>
  )
}

export default App