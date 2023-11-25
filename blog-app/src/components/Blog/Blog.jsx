import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../../Firebase";
import "./Blog.css";

const Blog = ({ blog }) => {
  const [url, setUrl] = useState(null);

  const getImageDownloadUrl = async (imagePath) => {
    const downloadUrl = await getDownloadURL(ref(storage, imagePath));
    setUrl(downloadUrl);
  };

  useEffect(() => {
    getImageDownloadUrl(blog.blogImage);
  }, []);

  console.log(blog);
  return (
    <div className="blog-container">
      <div className="blog-head">
        <img src={url} alt="" height="100px" width="100px" />
      </div>
      <div className="blog-body">
        <h2>{blog.title}</h2>
        <span>{blog.content}</span>
      </div>
    </div>
  );
};

export default Blog;
