import React from 'react'

const UserInfoComponent = ({userData}) => {
    console.log(userData)
    return (
        <>
            <div className="card">
                {/* <img className="rounded-circle z-depth-2" src={userData?.avatarUrl} alt="Card image" width={250}/> */}
                <div className="card-body">
                    <h4 className="card-title">{userData?.name}</h4>
                    <p className="font-weight-light">@{userData?.login}</p>
                    <p className="card-text">{userData?.bio}</p>
                    <a href="https://github.com/GilbertDaniel" className="btn btn-primary" target={"_blank"}>See Profile</a>
                </div>
            </div>
        </>
    )
}

export default UserInfoComponent