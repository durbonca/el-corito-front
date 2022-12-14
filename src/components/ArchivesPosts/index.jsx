import { ArchivePost } from "./ArchivePost";
import { Pagination } from "../";
import {
  StyledDivContainer,
  StyledPArchivesTitle,
  StyledUlArchivesPosts
} from "./ArchivesPosts.styles";

export const ArchivesPosts = ({ posts, page, totalPages }) => {
  return (
    <StyledDivContainer>
      <StyledPArchivesTitle>
        <span>Entradas recientes</span>
      </StyledPArchivesTitle>
      <StyledUlArchivesPosts>
        {posts.map(post => (
          <ArchivePost key={post.id} post={post} />
        ))}
      </StyledUlArchivesPosts>
      <Pagination page={page} totalPages={totalPages} />
    </StyledDivContainer>
  );
};
