import React,{useState} from 'react'
import {Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Home = () => {
  const n="nss"
  const [s,sets]=useState(false)
  if(s)
  {
    return <Navigate to='/dashboard/nik'/>
  }

  const handle=()=>{
    sets(true)
    
  }
  return (
    <div> <center>welcome to Home<br/>
       <button onClick={()=>{
        sets(true)
       }}>login</button><br/>
       <Link to={`/dashboard/${n}`}>dasbouard</Link><br/><br/>
       </center></div>
  )
}
export default Home

