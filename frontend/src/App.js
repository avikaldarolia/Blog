import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import Header from './components/Header';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import BlogDetail from './components/BlogDetail';
import AddBlog from './components/AddBlog';
import { useSelector } from 'react-redux';
function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/myBlogs" element={<UserBlogs />} />
          <Route path="/myBlog/:id" element={<BlogDetail />} />
          <Route path="/blogs/add" element={<AddBlog />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
