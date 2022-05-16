import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Blog from './Blog';

const UserBlogs = () => {
  const id = localStorage.getItem('userId');
  const [blogs, setBlogs] = useState();
  const [username, setUsername] = useState('');

  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => {
      setBlogs(data.blogs.blogs);
      setUsername(data.blogs.name);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {' '}
      {blogs &&
        blogs.map((blog, index) => (
          <Blog
            key={index}
            title={blog.title}
            description={blog.description}
            imageUrl={blog.image}
            userName={username}
          />
        ))}
    </div>
  );
};

export default UserBlogs;
