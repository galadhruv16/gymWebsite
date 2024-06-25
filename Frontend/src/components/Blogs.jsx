import React from 'react'

import Blog1 from "../assets/Blog1.jpg";
import Blog2 from "../assets/Blog2.jpg";
import Blog3 from "../assets/Blog3.jpg";
import Header from './Header';
import BlogPageTiles from './BlogPageTiles';
const Blogs = () => {
  return (
    <div>
      <Header />
      <div className='grid sm:grid-flow-col sm:m-0  grid-flow-row sm:justify-center gap-80 sm:mt-0 mt-28 sm:gap-24'>
        <BlogPageTiles />
        <BlogPageTiles />
        <BlogPageTiles />
      </div>
    </div>
  )
}

export default Blogs
