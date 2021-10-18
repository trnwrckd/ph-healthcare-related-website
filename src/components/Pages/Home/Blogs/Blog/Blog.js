import './Blog.css';

import React from 'react';

const Blog = (props) => {

    const {title, blogImage, details, date } = props.blog;

    return (
        <div>
            <img src={blogImage} height="350px" alt="" />
            <p>{title}</p>
            <p>{details}</p>
            <p>{date}</p>
        </div>
    );
};

export default Blog;