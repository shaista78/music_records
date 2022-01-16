import React, { useEffect, useState } from 'react'
import "./main.css"
import axios from 'axios';
export default function Main() {

    const [data, setData] = useState([]);
  //  const [page,setPage]= useState(2);
    const fetchData = async () => {
        const albums = await axios.get("http://localhost:3421/",)
        console.log(albums.data.album[0]._id);
        setData(albums.data.album)
    }
  const [repos, setRepos] = React.useState([]);
//   const debounceOnChange = React.useCallback(debounce(onChange, 4000), []);
//  function debounce(func, wait) {
//   let timeout;
//   return function(...args) {
//     const context = this;
//     if (timeout) clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       timeout = null;
//       func.apply(context, args);
//     }, wait);
//   };
// }
//   function onChange(value) {
//     axios.get(`http://localhost:3421/${value}`)
//       .then(res => res.json())
//       .then(res => setRepos(res));
//       console.log(repos);
//   }
const handleRes=()=>{
    console.log(repos);
}
    useEffect(() => {
        fetchData();
    }, [])
    return (
        
        <div>
            <input type="search" name="" id=""    value={e => setRepos(e.target.value)} placeholder='Search for artist' />
            <button onClick={handleRes}>Search</button>
                {data.map((dta) => (
                     <div key={dta.id}>
                        <div className='albums'>
                        <div className='cover_img'>
                        <img className='cover' src={dta.Image} alt="imgs" />
                        </div>
                    <div className='album-data'>
                        <p> <b>Artist:</b> {dta.Artist}</p>
                        <p> <b>Songs :</b>{dta.songs.length}</p>
                        <p> <b>Genre:</b>{dta.Genre}</p>
                        <p> <b>Year:</b>{dta.year}</p>
                    </div>
                </div>
        </div>

        ))}






        </div>
    )
}
