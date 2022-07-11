import React, { useEffect, useState, useCallback } from 'react'
import github from '../db.js';
import query from '../Query.js';

const ReposComponent = () => {
    const [repos, setRepos] = useState(null)
    console.log(repos)
    const fetchData = useCallback(() => {
        fetch(github.baseURL, {
            method: "POST",
            headers: github.headers,
            body: JSON.stringify(query),
        })
            .then(response => response.json())
            .then(data => {
                const viewer = data.data.viewer
                setRepos(viewer.repositories.nodes)
            })
            .catch(err => {
                console.log(err)
            })
    })

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <ul className='list-group list-group-flush'>
                {
                    repos.map((repo) => {
                        return (
                            <li className='list-group-item' key={repo.id.toString()}>
                                <a className='h5 mb-0 text-decoration-none' href={repo.url}>
                                    {repo.name}
                                </a>
                                <p className='small'>{repo.description}</p>
                            </li>
                        )
                    })
                }
            </ul>

        </>
    )
}

export default ReposComponent