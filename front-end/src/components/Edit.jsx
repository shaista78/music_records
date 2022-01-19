
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function Edit() {
     let { Artist } = useParams();
     const [data,setData]= useState([]);
     const [song,setSongs]=useState([]);
       const fetchdata = async () => {
        const data1 = await axios.get(`http://localhost:3421/albums/${Artist}`)
        setData(data1.data.album)
        setSongs(data1.data.album.songs)
    }

    useEffect(() => {
        fetchdata();
    }, [])
    return (
        <div>
            <div style={{ color: "white" ,marginTop:"15px"}} >
                <img style={{ width: "15%", height: "15%" }} src={data.Image} />
                <button>Change image</button>
                <p>Artist:<input type="text" value="rani" placeholder="Enter your name"/>  </p>
                <p>Genre:{data.Genre}   </p>
                <p>Year:{data.year}</p>
                <div style={{ alignItems:"center", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    {song.map((item) => (
                        <div key={item._id} style={{ borderRadius: "5px", width: "20%", margin: "5px", padding: "5px", backgroundColor: "white", height: "25%", color: "black", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <p> <b>Name:</b>{item.name}  </p>
                            <p> <b>Duration:</b>{item.duration}</p>
                            <button style={{ float: "right" }}>play</button>
                        </div>
                    ))}
                </div>
                <div>
                
                </div>
            </div>
        </div>
    )
}
