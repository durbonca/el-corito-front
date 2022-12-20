import { useState, useEffect, createContext } from "react";
import { getAllPosts, getLastPosts } from "../api/posts";

const Context = createContext();

const ContextProvider = props => {
  const [posts, setPosts] = useState([]);
  const [lastPost, setLastPost] = useState({});

  const fetchPosts = async () => {
    setLastPost(await getLastPosts());
    setPosts(await getAllPosts());
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Context.Provider value={{ posts, lastPost }}>
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
