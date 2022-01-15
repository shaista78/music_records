import React from 'react'

export default function Navbar() {
    const [repos, setRepos] = React.useState([]);
    const handleRes=()=>{
    console.log(repos);
}
    return (
        <div>
        <b style={{color:"white"}}>Albums and Songs</b>    <input type="search" name="" id=""    value={e => setRepos(e.target.value)} placeholder='Search for artist' />
            <button onClick={handleRes}>Search</button>
        </div>
    )
}
