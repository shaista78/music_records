import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import "./out.css"
import "./main.css" 
import { Link } from 'react-router-dom'
function Out() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(3);
  const [pageCount, setPageCount] = useState(0)
  const getData = async() => {
      const res = await axios.get(`http://localhost:3421/`)
      const data = res.data.album;
      console.log(data);
                const slice = data.slice(offset, offset + perPage)
                const postData = slice.map(dta => 
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
                    <button className='Songs' ><Link to={`/Songs/${dta._id}`} className='Songs'> All Songs</Link></button>
                    </div>
                </div>
      
                </div>)
                setData(postData)
                setPageCount(Math.ceil(data.length / perPage))
  }
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
};

 useEffect(() => {
   getData()
 }, [offset])

  return (
    <div className="App">
      {data}
       <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
    </div>
  );
}

export default Out;
