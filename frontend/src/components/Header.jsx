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
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';

const Header = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <AppBar position="sticky" sx={{ background: 'black' }}>
      <Toolbar>
        <Typography variant="h5">Blogs App</Typography>
        {isLoggedIn && (
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
        )}
        <Box display="flex" ml="auto" justifyItems="legacy">
          {!isLoggedIn && (
            <Box>
              <Button
                // variant="contained"
                LinkComponent={Link}
                to="/auth"
                sx={{ margin: '1', borderRadius: 3 }}
                color="warning"
              >
                Login
              </Button>
              <Button
                // variant="contained"
                LinkComponent={Link}
                to="/auth"
                sx={{ margin: '1', borderRadius: 3 }}
                color="warning"
              >
                Signup
              </Button>
            </Box>
          )}
          {isLoggedIn && (
            <Button
              varient="contained"
              LinkComponent={Link}
              to="/auth"
              sx={{ margin: '1', borderRadius: 10 }}
              color="warning"
              onClick={() =>
                dispatch(authActions.logout()).then(() =>
                  localStorage.removeItem('userId')
                )
              }
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
