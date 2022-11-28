import { ArchivePost } from "./ArchivePost";
import {
  StyledDivContainer,
  StyledPArchivesTitle,
  StyledUlArchivesPosts
} from "./ArchivesPosts.styles";

export const ArchivesPosts = ({ posts }) => {
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
    </StyledDivContainer>
  );
};
