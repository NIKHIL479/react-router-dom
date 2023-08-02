import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
export const About = () => {
  const {search}=useLocation()
  console.log(search)
  var navigate=useNavigate()
  let params=new URLSearchParams(search)
  console.log(params);
  return (
    <div><center>welcome to About
      <br/>
      <br/>
    

<p>Name:{params.get('name')}</p>
<p>Name:{params.get('id')}</p>
</center>
<button onClick={()=>navigate("/dashboard/nik")}>dashboard</button>
    
    </div>
  )
}
export default About