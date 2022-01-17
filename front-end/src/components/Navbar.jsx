//import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  //  const [repos, setRepos] = React.useState([]);
    const [par,setPar]= React.useState();
    const handleRes= ()=>{
    const out= document.getElementById("query").value ;
    console.log(out);
    setPar(out);
    console.log("query",par);
  //  const data= await axios.get(`http://localhost:3421/albums/${par}`)
    
     // setRepos(data.data.album);
  }

    return (
        <div>
        <b style={{color:"white"}}>Albums and Songs</b>    <input type="search" name="" id="query"     placeholder='Search for artist' />
            <button onClick={handleRes}><Link to={`albums/${par}`} className='Songs'> Search</Link></button>
        </div>
    )
}
