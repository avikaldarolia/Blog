import React, { useState } from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async (type = 'login') => {
    const res = await axios
      .post(`http://localhost:5000/api/user/${type}`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (isSignUp) {
      sendRequest('signup')
        .then((data) => localStorage.setItem('userId', data.user._id))
        .then(() => dispatch(authActions.login()))
        .then((data) => console.log(data))
        .then(() => navigate('/blogs'));
    } else {
      sendRequest()
        .then((data) => localStorage.setItem('userId', data.user._id))
        .then(() => dispatch(authActions.login()))
        .then((data) => console.log(data))
        .then(() => navigate('/blogs'));
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant="h3" padding={3} textAlign="center">
            {!isSignUp ? 'Login' : 'Sign-up'}
          </Typography>
          {isSignUp && (
            <TextField
              onChange={handleChange}
              value={inputs.name}
              name="name"
              placeholder="Name"
              margin="normal"
            />
          )}
          <TextField
            onChange={handleChange}
            value={inputs.email}
            name="email"
            placeholder="Email"
            margin="normal"
          />
          <TextField
            onChange={handleChange}
            value={inputs.password}
            name="password"
            placeholder="Password"
            margin="normal"
          />
          <Button
            type="submit"
            sx={{ borderRadius: 1, marginTop: 3 }}
            variant="contained"
            color="warning"
          >
            Submit
          </Button>
          <Button
            // color="secondary"
            variant="contained"
            sx={{ borderRadius: 1, marginTop: 3 }}
            onClick={() => setIsSignUp(!isSignUp)}
          >
            Change to {isSignUp ? 'Login' : 'Sign-up'}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
