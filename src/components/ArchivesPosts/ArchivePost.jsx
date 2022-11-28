import {
  StyledLiArchivePost,
  StyledDivEntryPreview,
  StyledSpanTagLine,
  StyledSpanCategory,
  StyledH2Title,
  StyledPEntry,
  StyledDivThumbnailContainer
} from "./ArchivesPosts.styles.jsx";

export const ArchivePost = () => {
  return (
    <>
      <StyledLiArchivePost>
        <StyledDivThumbnailContainer>
          <a href="">
            <img src="https://picsum.photos/150/150" alt="thumbnail" />
          </a>
        </StyledDivThumbnailContainer>
        <StyledDivEntryPreview>
          <StyledSpanTagLine>7 de noviembre de 2022</StyledSpanTagLine>
          <StyledSpanCategory>El Corito Histórico</StyledSpanCategory>
          <StyledH2Title>CARACAS: LA FUNDACIÓN</StyledH2Title>
          <StyledPEntry>
            En 1567, el conquistador español Diego de Losada fundó la ciudad de
            Santiago de León de Caracas, en el sitio donde hoy se encuentra la
            ciudad de Caracas. La ciudad fue fundada en el lugar donde se
            encontraba el pueblo indígena de Guacara, que fue destruido por los
            españoles.
          </StyledPEntry>
        </StyledDivEntryPreview>
      </StyledLiArchivePost>
    </>
  );
};
