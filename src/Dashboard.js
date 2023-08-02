import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Dashboard = () => {
  const n="sdfrerf"
  const navigate=useNavigate()
  const params=useParams()
  return (
    <div> <center>welcome to dashboard<br/>
    <h1>name is : {params.name}</h1><br/>
    <button onClick={()=>{
      navigate("/about")
    }}>login</button><br/>
    <Link to={`/about?name=${n}&id=${79}`}>about</Link>
   
    </center></div>

  )
}
export default Dashboard
