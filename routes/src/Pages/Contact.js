import React from "react";
import { useNavigate } from "react-router-dom";

const Contact=({count})=>{
    let navigate=useNavigate();

    return (
        <div>
            <h1>value of count={count}</h1>
            <p>This is Contact page</p>
            <button onClick={()=>navigate("/blog")}>Go to blog 1</button>
            <button onClick={()=>navigate("blog")}>Go to blog 2</button>

            <button onClick={()=>navigate(-1)}>back
           </button><button onClick={()=>navigate(1)}>Ahead</button>
        </div>
    )
}
export default Contact;