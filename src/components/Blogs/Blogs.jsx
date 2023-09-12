import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookMark,handleReadingTime}) => {
    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
    const fetchData=async()=>{
        const res= await fetch('blogs.json');
        const data= await res.json();
        setBlogs(data);
    }
    fetchData();
    
     },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-2xl font-semibold mb-2">Blogs: {blogs.length}</h1>
            {
                blogs.map((blog) => <Blog key ={blog.id} blog={blog} handleBookMark={handleBookMark}
                handleReadingTime={handleReadingTime}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handleBookMark:PropTypes.func,
    handleReadingTime:PropTypes.func
}

export default Blogs;