import { useEffect, useState } from "react";
import { getPosts, getLastPosts } from "../../api/posts";
import { Hero, ArchivesPosts } from "../../components";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [lastPost, setLastPost] = useState({});

  const fetchPosts = async () => {
    setLastPost(await getLastPosts());
    setPosts(await getPosts());
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Hero {...lastPost} />
      <ArchivesPosts posts={posts} />
    </>
  );
};
