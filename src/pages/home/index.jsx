import { useEffect, useState } from "react";
import { getPosts, getLastPosts, getPostCount } from "../../api/posts";
import { Hero, ArchivesPosts } from "../../components";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [lastPost, setLastPost] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchPosts = async () => {
    setLastPost(await getLastPosts());
    setPosts(await getPosts(page));
    setTotalPages((await getPostCount()) / 10);
  };

  const fetchPaginatedPosts = async () => {
    setPosts(await getPosts(page));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    fetchPaginatedPosts();
  }, [page]);

  return (
    <>
      <Hero {...lastPost} />
      <ArchivesPosts
        page={page}
        posts={posts}
        totalPages={totalPages}
        setPage={setPage}
      />
    </>
  );
};
