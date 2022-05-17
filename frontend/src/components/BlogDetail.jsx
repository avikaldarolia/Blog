/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const labelStyles = { mt: 1, fontSize: '18px', fontWeight: 'bold' };

const BlogDetail = () => {
  const id = useParams().id;
  console.log(id);
  const [blog, setBlog] = useState();
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const fetchDetails = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    fetchDetails().then((data) => {
      setBlog(data.blog);
      setInputs({
        title: data.blog.title,
        description: data.blog.description,
      });
    });
  }, []);
  console.log(blog);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .put(`http://localhost:5000/api/blog/update/${id}`, {
        title: inputs.title,
        description: inputs.description,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => navigate('/myBlogs/'))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {' '}
      <form onSubmit={handleSubmit}>
        <Box
          border={3}
          borderColor="#ED6C02"
          borderRadius={6}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={'auto'}
          display="flex"
          flexDirection={'column'}
          width={'75%'}
          marginTop={3}
        >
          <Typography
            fontWeight="bold"
            color="grey"
            variant="h2"
            textAlign="center"
          >
            Post your blog
          </Typography>
          <InputLabel sx={labelStyles}>Title</InputLabel>
          <TextField
            name="title"
            onChange={handleChange}
            value={inputs.title}
            margin="normal"
            variant="outlined"
          />
          <InputLabel sx={labelStyles}>Description</InputLabel>
          <TextField
            value={inputs.description}
            name="description"
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <Button
            sx={{ borderRadius: 2, mt: 2, width: '20%', mx: 'auto' }}
            variant="contained"
            color="warning"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default BlogDetail;
