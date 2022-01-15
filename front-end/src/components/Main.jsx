import React from 'react'
import "./main.css"
import axios from {axios};
export default function Main() {

    const [album,setAlbum] = useState([]);

    fetchData=()=>{
        const albums = axios.get("http://localhost:3421/")
        console.log(albums);
    }
    return (
        <div>
         <input type="search" name="" id="" placeholder='Search for artist'/>
         <div className='albums'>
         <p>Shaista</p>
         <p>Songs 5</p>
         </div>
        </div>
    )
}
