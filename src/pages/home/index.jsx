import { useEffect, useState } from "react";
import { getPosts, getLastPosts, getPostCount } from "../../api/posts";
import { Hero, ArchivesPosts, Loading } from "../../components";

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
      {posts.length === 0 ? (
        <div className="flex justify-center p-4">
          <Loading />
        </div>
      ) : (
        <ArchivesPosts
          page={page}
          posts={posts}
          totalPages={totalPages}
          setPage={setPage}
          setPosts={setPosts}
        />
      )}
    </>
  );
};
