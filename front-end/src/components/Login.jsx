import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Login() {
        const [data, setData] = useState([]);
         const [song, setSongs] = useState([]);
    const fetchData = async () => {
        const albums = await axios.get("http://localhost:3421/",)
        console.log(albums.data.album[0]._id);
        setData(albums.data.album)
        setSongs(albums.data.album.songs)
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <div>
           
                     <div>
                        <div style={{color:"white"}} >
                        <div >
                        <img src="https://ih1.redbubble.net/image.1224840128.9388/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg" alt="imgs" style={{width:"20%",height:"20%"}} />
                        </div>
                    <div >
                        <p> <b>Artist:</b> Arjith</p>
                        <p> <b>Total Songs :</b>3</p>
                        
                        <p> <b>Genre:</b>Rock</p>
                        <p> <b>Year:</b>2020</p>
                    </div>
                </div>
                </div>

     
            </div>
        </div>
    )
}
