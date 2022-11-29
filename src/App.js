import { useEffect, useState } from "react";
import { getPosts } from "./api/posts";
import { NavBar, Hero, ArchivesPosts, Footer } from "./components";

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
      <Footer />
    </>
  );
}

export default App;
