import styled from "styled-components";

export const EntryContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75em;
  margin: 0;
  max-width: 100%;
  text-align: start;
`;

export const StyledH1Title = styled.h1`
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, Arial, sans-serif;
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.3em;
  margin-top: 1.25rem;
  margin-bottom: 2.5rem;
  padding: 0;
`;

export const StyledH2Title = styled.h2`
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.3em;
  margin-top: 1.25rem;
  margin-bottom: 2.5rem;
  padding: 0;
`;

export const StyledFigureVideo = styled.figure`
  width: 100%;
  margin: 0;
`;

export const StyledAudioPlayer = styled.audio`
  width: 100%;
  min-width: 300px;
  margin: 0 0 24px;
`;

export const VideoContainer = styled.figure`
  width: 100%;
  margin: 0;
`;

export const StyledIframeVideo = styled.iframe`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const StyledDivBody = styled.div`
  margin: 1.25em 0;
  padding: 0;
`;

export const StyledSpanDate = styled.span`
  background-color: #f5f5f5;
  color: #484848;
  display: inline;
  width: fit-content;
  padding: 2px 10px;
`;
