import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Songs() {
    let { id } = useParams();
    const [data, setData] = useState([]);
    const [song, setSongs] = useState([]);
    const [arr, setArr] = useState([]);

    const fetchdata = async () => {
        const data1 = await axios.get(`http://localhost:3421/Songs/${id}`)
        setData(data1.data.album)
        setSongs(data1.data.album.songs)
    }

    useEffect(() => {
        fetchdata();
    }, [])
    return (
        <>

            <div style={{ color: "white" ,marginTop:"15px"}} >
                <img style={{ width: "15%", height: "15%" }} src={data.Image} />
                <p>Artist:{data.Artist}   </p>
                <p>Genre:{data.Genre}   </p>
                <p>Year:{data.year}</p>
                <div style={{ margin: "auto", display: "flex", flexDirection: "coloum", justifyContent: "space-between" }}>
                    {song.map((item) => (
                        <div key={item._id} style={{ borderRadius: "5px", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;", width: "20%", margin: "5px", padding: "5px", backgroundColor: "white", height: "25%", color: "black", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <p> <b>Name:</b>{item.name}  </p>
                            <p> <b>Duration:</b>{item.duration}</p>
                            <button style={{ float: "right" }}>play</button>

                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
