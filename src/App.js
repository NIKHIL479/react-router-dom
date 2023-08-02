import React from 'react'
import './App.css'
import { BrowserRouter,Routes,Route}  from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
//import Dashboard from './Dashboard'
import About from './About'
import Notfound from './Notfound'
const  LazyDashboard=React.lazy(()=> import('./Dashboard'))

 const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard/:name" element={<React.Suspense fallback="loading"> <LazyDashboard/> </React.Suspense>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<Notfound/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App