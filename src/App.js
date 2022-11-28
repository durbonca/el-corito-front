import { useEffect, useState } from "react";
import { getPosts } from "./api/posts";
import { NavBar, Hero, ArchivesPosts } from "./components";

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const posts = await getPosts();
    setPosts(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <NavBar />
      <Hero />
      <ArchivesPosts posts={posts} />
    </>
  );
}

export default App;
