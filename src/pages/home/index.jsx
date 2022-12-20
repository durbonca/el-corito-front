import { useContext } from "react";
import { Hero, ArchivesPosts, Loading } from "../../components";
import { StyledDivContainer } from "./home.styled";
import { Context } from "../../context/context";

export const Home = () => {
  const { posts, lastPost } = useContext(Context);

  return (
    <>
      <Hero {...lastPost} />
      {posts.length === 0 ? (
        <div className="flex justify-center p-4">
          <Loading />
        </div>
      ) : (
        <StyledDivContainer>
          <ArchivesPosts posts={posts} />
        </StyledDivContainer>
      )}
    </>
  );
};
