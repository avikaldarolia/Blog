import React, { useState } from 'react';
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import axios from 'axios';

const labelStyles = { mt: 1, fontSize: '18px', fontWeight: 'bold' };
const AddBlog = () => {
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    imageUrl: '',
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post(`http://localhost:5000/api/blog/add`, {
        title: inputs.title,
        description: inputs.description,
        image: inputs.imageUrl,
        user: localStorage.getItem('userId'),
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then((data) => console.log(data));
  };
  return (
    <div>
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
          <InputLabel sx={labelStyles}>Image Url</InputLabel>
          <TextField
            value={inputs.imageUrl}
            name="imageUrl"
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

export default AddBlog;
