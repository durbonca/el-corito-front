import { breakText, wysiwygText, getPostDate } from "../../utils/functions";
import {
  StyledLiArchivePost,
  StyledDivEntryPreview,
  StyledSpanTagLine,
  StyledSpanCategory,
  StyledH2Title,
  StyledPEntry,
  StyledDivThumbnailContainer
} from "./ArchivesPosts.styles.jsx";

export const ArchivePost = ({ post }) => {
  console.log(post);
  const { title, file, body, date_creation } = post;

  return (
    <>
      <StyledLiArchivePost>
        <StyledDivThumbnailContainer>
          <a href="">
            <img src={file.src} alt={file.title} />
          </a>
        </StyledDivThumbnailContainer>
        <StyledDivEntryPreview>
          <StyledSpanTagLine>{getPostDate(date_creation)}</StyledSpanTagLine>
          <StyledSpanCategory>El Corito Histórico</StyledSpanCategory>
          <StyledH2Title>{title}</StyledH2Title>
          <StyledPEntry>{breakText(wysiwygText(body), 50)}</StyledPEntry>
        </StyledDivEntryPreview>
      </StyledLiArchivePost>
    </>
  );
};
