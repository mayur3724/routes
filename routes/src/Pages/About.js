import React from "react";
import { useNavigate } from "react-router-dom";

const About=()=>{
    const navigate = useNavigate();
    return (
        <div>
            <h1>Aboute</h1>
            <p>This is About page</p>

           <button onClick={()=>navigate(-1)}>back
           </button><button onClick={()=>navigate(1)}>Ahead</button>
        </div>
    )
}
export default About;