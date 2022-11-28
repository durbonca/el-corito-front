import styled from "styled-components";
import { BreakPoints } from "../../utils/constants";

export const StyledDivContainer = styled.div`
    background-color: #222222;
    color: rgba(255,255,255,0.75);
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.7;
}`;

export const StyledDivHero = styled.div`
  padding-top: 100px;
  padding-bottom: 3.75rem;
  margin: 0 auto;
  text-align: start;
  width: 1220px;

  @media (max-width: ${BreakPoints.desktop}) {
    padding-inline-end: 50px;
    padding-inline-start: 50px;
    width: 100%;
  }
  @media (max-width: ${BreakPoints.tablet}) {
    padding-block: 3.125rem 2.5rem;
    padding-inline: 40px;
    width: 100%;
  }
  @media (max-width: ${BreakPoints.mobile}) {
    padding-block: 3.125rem;
    padding-inline: 25px;
  }
`;

export const StyledDivWelcome = styled.div`
  display: flex;
  align-content: stretch;
  align-items: stretch;
  gap: 80px;
  justify-content: space-between;

  @media (max-width: ${BreakPoints.desktopSmall}) {
    gap: 40px;
  }
  @media (max-width: ${BreakPoints.tablet}) {
    flex-direction: column;
  }
`;

export const StyledDivColumn = styled.div`
  flex: 1;
  overflow-wrap: break-word;
  text-align: start;
`;

export const StyledPTag = styled.p`
  background-color: #ffffff;
  color: #222222;
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 400;
  padding: 4px 10px;
`;

export const StyledH2Title = styled.h2`
  margin-top: 1.875rem;
  font-size: 2rem;
  letter-spacing: -1px;
  line-height: 1.4em;

  @media (max-width: ${BreakPoints.desktopSmall}) {
    font-size: 1.25rem;
  }

  @media (max-width: ${BreakPoints.tablet}) {
    font-size: 1.5rem;
  }
`;

export const StyledATitle = styled.a`
  color: #ffffff;
`;
