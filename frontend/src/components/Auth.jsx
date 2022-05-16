import React, { useState } from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
const Auth = () => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
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
