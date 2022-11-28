import { ArchivePost } from "./ArchivePost";
import {
  StyledDivContainer,
  StyledPArchivesTitle,
  StyledUlArchivesPosts
} from "./ArchivesPosts.styles";

export const ArchivesPosts = () => {
  return (
    <StyledDivContainer>
      <StyledPArchivesTitle>
        <span>Entradas recientes</span>
      </StyledPArchivesTitle>
      <StyledUlArchivesPosts>
        <ArchivePost />
      </StyledUlArchivesPosts>
    </StyledDivContainer>
  );
};
