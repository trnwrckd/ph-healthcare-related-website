import './Blogs.css';
import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./blogs.json').then(res => res.json())
            .then(data => setBlogs(data));
    },[])

    return (
        <div className="container">
            <h1>Healthcare Blogs</h1>
            <div className ='row row-cols-1 row-cols-md-3 g-3'>
            {
                blogs.map( blog=> <Blog key= {blog.blogID} blog = {blog} /> )
            }
            </div>
        </div>
    );
};

export default Blogs;