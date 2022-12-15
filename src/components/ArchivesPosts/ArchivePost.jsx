import { Link } from "react-router-dom";
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
        <Link to={`/episodio/${title}`}>
          <StyledImgThumbnail src={file.src} alt={file.title} />
        </Link>
      </StyledDivThumbnailContainer>
      <StyledDivEntryPreview>
        <StyledSpanTagLine>{getPostDate(date_creation)}</StyledSpanTagLine>
        <StyledSpanCategory>{category?.title}</StyledSpanCategory>
        <Link to={`/episodio/${title}`}>
          <StyledH2Title>{title}</StyledH2Title>
        </Link>
        <StyledPEntry>{breakText(wysiwygText(body), 50)}</StyledPEntry>
      </StyledDivEntryPreview>
    </StyledLiArchivePost>
  );
};
