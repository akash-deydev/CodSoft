import { getDocs, collection } from "firebase/firestore";

import { db, storage } from "../../Firebase";

import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const blogData = querySnapshot.docs.map((doc) => doc.data());
      setBlogs(blogData);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(blogs);
  return (
    <div>
      {blogs.map((blog, index) => {
        return <Blog key={index} blog={blog} />;
      })}
    </div>
  );
};

export default Blogs;
