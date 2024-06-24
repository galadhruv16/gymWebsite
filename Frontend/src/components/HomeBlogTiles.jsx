import React from 'react'
import Blog1 from '../assets/Blog1.jpg'
const HomeBlogTiles = () => {
  return (
    <div>
      <div className="w-80 mx-10">
          <img src={Blog1} alt="Blogpic" className="rounded-xl" />
          <div class="absolute mb-2 w-80 bottom-0  text-white text- p-2">
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
