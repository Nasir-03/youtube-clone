import { useState } from "react"
import Navbar from "../components/navbar/Navbar"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "../components/page/home/Home";
import Video from "../components/page/videosection/Video";

function App() {
  const [sidebar,setSidebar] = useState(true);
  const[setup,setSetup] = useState(true);

  return (
    <>
     <BrowserRouter>
     <Navbar setSidebar={setSidebar} setSetup={setSetup} setup={setup}/>
       <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video setup={setup}/>}/>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
