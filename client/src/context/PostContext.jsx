import { useState, useEffect, useContext, createContext } from "react";
import { createPostBlog, createPostArticle } from "../api/post";

export const PostContext = createContext();

export const usePost = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error("usePost must be used within a PostProvider");
  }

  return context;
};

export const PostProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);

  const PostBlog = async (data) => {
    try {
      const res = await createPostBlog(data);
      console.log(res);
    } catch (error) {
      console.log(error);
      setErrors(
        error.response?.data?.errors || ["An unexpected error occurred"]
      );
    }
  };

  const PostArticle = async (data) => {
    try {
      const res = await createPostArticle(data);
      console.log(res);
    } catch (error) {
      console.error(error.response);
      setErrors(
        error.response?.data?.errors || ["An unexpected error occurred"]
      );
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <PostContext.Provider value={{ PostBlog, PostArticle, errors }}>
      {children}
    </PostContext.Provider>
  );
};
