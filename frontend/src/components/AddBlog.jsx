import { Box, InputLabel, TextField, Typography } from '@mui/material';
import React from 'react';

const labelStyles = { mt: 1, fontSize: '18px', fontWeight: 'bold' };
const AddBlog = () => {
  return (
    <div>
      <form action="">
        <Box
          border={3}
          borderColor="#ED6C02"
          borderRadius={6}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={'auto'}
          display="flex"
          flexDirection={'column'}
          width={'80%'}
          marginTop={3}
        >
          <Typography
            fontWeight="bold"
            // padding={1}
            color="grey"
            variant="h2"
            textAlign="center"
          >
            Post your blog
          </Typography>
          <InputLabel sx={labelStyles}>Title</InputLabel>
          <TextField margin="normal" variant="outlined" />
          <InputLabel sx={labelStyles}>Description</InputLabel>
          <TextField margin="normal" variant="outlined" />
          <InputLabel sx={labelStyles}>Image Url</InputLabel>
          <TextField margin="normal" variant="outlined" />
        </Box>
      </form>
    </div>
  );
};

export default AddBlog;
