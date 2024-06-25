import React from 'react'
import Blog1 from '../assets/Blog1.jpg'
const HomeBlogTiles = () => {
  return (
    <div>
      <div className="w-80 mx-10">
          <img src={Blog1} alt="Blogpic" className="rounded-md" />
          <div class="sm:absolute sm:-my-0 -my-[40%] mb-2 w-80 sm:bottom-0 z-10 text-white p-2">
            <p className="mx-4 my-2 pt-auto font-bold">BLOG TITLE</p>
            <p className="text-sm mx-4 ">
              This is a Description for the blog. This is a description for the
              blog. This is a description for the Blog
            </p>
          </div>
        </div>
    </div>
  )
}

export default HomeBlogTiles
