import React from 'react'

const RepoInfoComponent = ({repos}) => {
    console.log(repos)
  return (
   <>
    <ul className='list-group list-group-flush'>
        {
          repos.map((item) => {
            return (
              <li className='list-group-item' key={item.id.toString()}>
                <a className='h5 mb-0 text-decoration-none' href={item.url} target="_blank">
                  {item.name}
                </a>
                <p className='small'>{item.description}</p>
              </li>
            )
          })
        }
      </ul>
   </>
  )
}

export default RepoInfoComponent