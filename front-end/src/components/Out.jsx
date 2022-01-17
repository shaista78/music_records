import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./out.css"
import "./main.css" 
import { Link } from 'react-router-dom'
function Out() {
  const [data, setData] = useState([]);
  const [total,setTotal] = useState(3);
  const [pageCount, setPageCount] = useState(1)
  const getData = async() => {
      const res = await axios.get(`http://localhost:3421/?size=${3}&page=${pageCount}`)
      const data = res.data.album;
      const total = res.data.totalPage;
      setTotal(total);
                setData(data)
  }
  const handlePageClick1 = () => {
    if(pageCount> 1){
    const count = pageCount-1;
    document.getElementById("btn").style.background = "white";
    setPageCount(count)
    }
    if(pageCount==2){
       document.getElementById("btn1").style.background = "black";
    }
    console.log(pageCount)
};
 const handlePageClick = () => {
  if(pageCount<total){
    const count = pageCount+1;
    
     document.getElementById("btn1").style.background = "white";
    setPageCount(count)
    }
    if(pageCount==2){
       document.getElementById("btn").style.background = "black";
    }
    console.log(pageCount)
};
 useEffect(() => {
   getData()
 }, [pageCount])

  return (
    <div className="App">
    <div style={{color:"white"}}>
    <b>Filters</b>&emsp;
    <label>Genre</label>
        <select >
            <option>All</option>
            <option>Classical</option>
            <option>Rock</option>
            <option>Melody</option>
        </select>
        &emsp;
        <label>Sort by year</label>
        <input />
    </div>
     {data.map(dta => 
                     <div key={dta._id}>
                        <div className='albums'>
                        <div className='cover_img'>
                        <img className='cover' src={dta.Image} alt="imgs" />
                        </div>
                    <div className='album-data'>
                        <p> <b>Artist:</b> {dta.Artist}</p>
                        <p> <b>Songs :</b>{dta.songs.length}</p>
                        <p> <b>Genre:</b>{dta.Genre}</p>
                        <p> <b>Year:</b>{dta.year}</p>
                    <button className='Songs' ><Link to={`/Songs/${dta.Artist}`} className='Songs'> All Songs</Link></button>
                    </div>
                </div>
      
                </div>)}
      <button onClick={handlePageClick1} id="btn1" ><Link to={`?size=${3}&page=${pageCount}`} className='Songs'> prev</Link></button>
      &emsp;&emsp;<b style={{color:"white"}} >{pageCount}</b>&emsp;&emsp;
      <button onClick={handlePageClick} id="btn"><Link to={`?size=${3}&page=${pageCount}`} className='Songs'> next</Link></button>
    </div>
  );
}

export default Out;



// 8106384765