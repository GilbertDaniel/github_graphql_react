import React from 'react'

const RepoInfoComponent = ({ repos }) => {
    console.log(repos)
    return (
        <>
            <ul className='list-group list-group-flush'>
                {
                    repos.map((item) => {
                        return (
                            <li className='list-group-item' key={item.id.toString()}>
                                <div className='d-flex jsutify-content-between align-items-center'>
                                    <div className='d-flex flex-column'>
                                        <a className='h5 mb-0 text-decoration-none' href={item.url} target="_blank">
                                            {item.name}
                                        </a>
                                        <p className='small'>{item.description}</p>
                                    </div>
                                    <span className={
                                        'px-1 py-0 ms-1 d-incline-block btn btn-sm' + 
                                        (item.viewerSubscription === "SUBSCRIBED" ? " btn-success" : " btn-outline-secondary")
                                    }
                                    style={{fontSize:'.7em'}}
                                    >
                                        {item.viewerSubscription}
                                    </span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default RepoInfoComponent