import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Navbar from "./Pages/Navbar";
import "./App.css";
import React,{useState} from "react";

import { Routes, Route } from "react-router-dom";

const App=()=>{
  const [count,setCount] = useState(0);
    return(
    <div>
      <Navbar/>

     <Routes>
      <Route path="/about" element={<about/>}/>
      <Route path="/contact" element={<contact count={count}/>}/>
      <Route path="/home" element={<home/>}/>
      <Route path="/blog" element={<blog count={count} setCount={setCount}/>}/>
     </Routes>
    </div>
  )
}
export default App;