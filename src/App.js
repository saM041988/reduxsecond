import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

import Body from './component/Body';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import AddEditBlog from './pages/AddEditBlog';

import SinglePage from './pages/SinglePage';
import Other from './pages/Other';


function App() {
  return (
    <>
      <Router>
       <Body>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blogDetails' element={<BlogDetails />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/addEditBlog' element={<AddEditBlog />} />

          <Route path='/singlePage' element={<SinglePage />} />
          <Route path='/other' element={<Other />} />
        </Routes>
        </Body>
      </Router>
    </>
  );
}

export default App;
