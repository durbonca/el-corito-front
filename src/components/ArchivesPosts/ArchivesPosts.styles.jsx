import styled from "styled-components";

export const StyledDivContainer = styled.div`
  display: block;
  overflow-wrap: break-word;
  text-align: start;
  font-size: 1rem;
  line-height: 1.6;
  padding: 30px;
`;

export const StyledPArchivesTitle = styled.p`
  display: block;
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 1.25em;
  margin: 0 0 3rem;
  padding: 0;
  & > span {
    display: inline-block;
    position: relative;
  }
  &:after {
    background-color: #333;
    content: "";
    display: inline-block;
    height: 2px;
    margin: 0 0 0 2rem;
    width: 120px;
  }
`;

export const StyledUlArchivesPosts = styled.ul`
  list-style-position: outside;
  margin: 0;
  padding: 0;

  & > li:not(:first-child) {
    border-top: dashed 2px #ddd;
    margin-top: 40px;
    padding-top: 40px;
  }
`;

export const StyledLiArchivePost = styled.li`
  list-style-type: none;
  display: flex;
  align-items: stretch;
  align-content: stretch;
  justify-content: space-between;
  gap: 40px;
`;

export const StyledDivEntryPreview = styled.div`
  flex: 1;
  font-size: 0.9375rem;
  line-height: 1.7;
`;

export const StyledSpanTagLine = styled.span`
  background-color: #fff;
  color: #484848;
  display: inline-block;
  padding: 2px 10px;
  font-size: 0.8125rem;
`;

export const StyledSpanCategory = styled.span`
  color: currentColor;
  text-decoration: underline;
`;

export const StyledH2Title = styled.h2`
  margin-top: 1.375rem;
  font-size: 1.375rem;
  letter-spacing: 0.5px;
  line-height: 1.5;
  font-weight: 600;
  color: #181818;
`;

export const StyledPEntry = styled.p`
  margin: 1.375rem 0;
  padding: 0;
`;

export const StyledDivThumbnailContainer = styled.div`
  flex: 0 1 150px;
  position: relative;
`;
