import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Blog';

const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const sendRequest = async (type = 'login') => {
    const res = await axios
      .get(`http://localhost:5000/api/blog`)
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);

  return (
    <div>
      {blogs &&
        blogs.map((blog, index) => (
          <Blog
            key={index}
            title={blog.title}
            description={blog.description}
            imageUrl={blog.image}
            userName={blog.user.name}
          />
        ))}
    </div>
  );
};

export default Blogs;
