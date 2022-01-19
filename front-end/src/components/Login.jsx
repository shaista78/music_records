import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Login() {
    let history = useHistory();
    const [data,setData]=useState([]);
    const [user,setUser]=useState("");
    const [pass,setPass]= useState("");
  const fetchdata = async () => {
        const data1 = await axios.get(`http://localhost:3421/signup`)
        console.log(data1.data.signin);
        setData(data1.data.signin)
       
    }
    const handleClick=()=>{
        for(let i=0;i<data.length;i++){
            if(user===data[i].Name && pass===data[i].Password){
               
                history.push(`/edit/${user}`)
               
            }else{
                console.log(data[i].Name,data[i].Password)
                console.log("in",user,pass)
            }
        }
    }

    useEffect(() => {
        fetchdata();
    }, [])
    return (
        <div style={{color:"white",marginTop:"120px"}}>
        <label>Enter user name</label>    <input placeholder="Enter username" id="username" onChange={(e)=>setUser(e.target.value)}/><br/>
        <label>Enter Password</label>    <input placeholder="Enter Password" id="psw" onChange={(e)=>setPass(e.target.value)}/><br/>
        <button onClick={handleClick}>Submit</button>
        </div>
    )
}
