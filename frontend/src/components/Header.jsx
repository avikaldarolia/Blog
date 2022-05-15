import React, { useState } from 'react';
import {
  AppBar,
  Tabs,
  Typography,
  Toolbar,
  Box,
  Button,
  Tab,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  const [value, setValue] = useState();
  return (
    <AppBar position="sticky" sx={{ background: 'black' }}>
      <Toolbar>
        <Typography varient="h4">Blogs App</Typography>
        <Box display="flex" ml="auto">
          <Tabs
            textColor="white"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
            <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
          </Tabs>
        </Box>
        <Box display="flex" ml="auto">
          <Button
            varient="contained"
            LinkComponent={Link}
            to="/auth"
            sx={{ margin: '1', borderRadius: 10 }}
            color="warning"
          >
            Login
          </Button>
          <Button
            varient="contained"
            LinkComponent={Link}
            to="/auth"
            sx={{ margin: '1', borderRadius: 10 }}
            color="warning"
          >
            Signup
          </Button>
          <Button
            varient="contained"
            LinkComponent={Link}
            to="/auth"
            sx={{ margin: '1', borderRadius: 10 }}
            color="warning"
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
