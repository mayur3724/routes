import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Blog=({count,setCount})=>{
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={()=>navigate(-1)}>Back</button>
            <h1>Blog</h1>
            <p>This is Blog page</p>
            <h2>Count:{count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>

            <button onClick={()=>navigate(-1)}>back
           </button><button onClick={()=>navigate(1)}>Ahead</button>
        </div>
    )
}
export default Blog;