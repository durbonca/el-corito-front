import { breakText, wysiwygText, getPostDate } from "../../utils/functions";
import {
  StyledLiArchivePost,
  StyledDivEntryPreview,
  StyledSpanTagLine,
  StyledSpanCategory,
  StyledH2Title,
  StyledPEntry,
  StyledDivThumbnailContainer,
  StyledImgThumbnail
} from "./ArchivesPosts.styles.jsx";

export const ArchivePost = ({ post }) => {
  const { title, file, body, date_creation, category } = post;
  return (
    <StyledLiArchivePost>
      <StyledDivThumbnailContainer>
        <a href="">
          <StyledImgThumbnail src={file.src} alt={file.title} />
        </a>
      </StyledDivThumbnailContainer>
      <StyledDivEntryPreview>
        <StyledSpanTagLine>{getPostDate(date_creation)}</StyledSpanTagLine>
        <StyledSpanCategory>{category?.title}</StyledSpanCategory>
        <StyledH2Title>{title}</StyledH2Title>
        <StyledPEntry>{breakText(wysiwygText(body), 50)}</StyledPEntry>
      </StyledDivEntryPreview>
    </StyledLiArchivePost>
  );
};
