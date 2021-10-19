import './Blog.css';

import React from 'react';

const Blog = (props) => {

    const {title, blogImage, details, date ,author  } = props.blog;

    return (
        <div class="d-flex flex-column justify-content-between">
            <div>
                <img src={blogImage} height="350px" width="350px" alt="" className="rounded"/>
            </div>
            <div className="px-5 px-lg-2 pt-3">
                <h4>{title}</h4>
                <div className="d-flex justify-content-around">
                    <p>{date}</p>
                    <p> By {author}</p>
                </div>
                <p>{details}</p>
            </div>
            <button className = "btn-generic"> Read More</button>
        </div>
    );
};

export default Blog;