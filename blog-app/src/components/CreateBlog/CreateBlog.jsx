import "./CreateBlog.css";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { uploadBytes, ref } from "firebase/storage";
import { db } from "../../Firebase";
import { useSelector } from "react-redux";
import { storage } from "../../Firebase";

const CreateBlog = () => {
  const user = useSelector((state) => state.user.user);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogImage, setBlogImage] = useState();

  const onPublish = async (e) => {
    const imageRef = ref(
      storage,
      `uploads/images/${Date.now()}-${blogImage.name}`
    );

    const uploadedImageRef = await uploadBytes(imageRef, blogImage);
    try {
      await addDoc(collection(db, "blogs"), {
        title: title,
        content: content,
        blogImage: uploadedImageRef.ref.fullPath,
        author: user,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-blog">
      <div id="heading">Create a Blog</div>
      <div>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea
          name="content"
          id="content"
          cols="80"
          rows="25"
          placeholder="Write about your blog..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div>
        <input
          type="file"
          id="blogImage"
          onChange={(e) => setBlogImage(e.target.files[0])}
        />
      </div>
      <div>
        <button onClick={onPublish}>Publish</button>
      </div>
    </div>
  );
};

export default CreateBlog;
