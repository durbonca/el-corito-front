import styled from "styled-components";
import { BreakPoints } from "../../utils/constants";

export const FooterContainer = styled.footer`
  background-color: #121212;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.6;
  padding: 1.875rem 0;
`;

export const StyledDivSection = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 0 60px;
  width: 1220px;

  @media (max-width: ${BreakPoints.desktop}) {
    width: 100%;
    padding-inline-end: 50px;
    padding-inline-start: 50px;
  }

  @media (max-width: ${BreakPoints.tablet}) {
    padding-inline: 40px;
  }

  @media (max-width: ${BreakPoints.mobile}) {
    padding-inline: 25px;
  }
`;

export const StyledPCopyright = styled.p`
  margin: 0;
  padding: 0;
`;

export const StyledLink = styled.a`
  color: inherit;
  text-decoration: underline;
  transition: all 0.15s ease-in-out;
  background-color: transparent;

  &:hover {
    color: #fff;
    text-decoration: none;
  }
`;
