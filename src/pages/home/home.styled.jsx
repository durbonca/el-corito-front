import styled from "styled-components";
import { BreakPoints } from "../../utils/constants";

export const StyledDivContainer = styled.div`
  padding-bottom: 3.75rem;
  margin: 0 auto;
  width: 1220px;

  @media (max-width: ${BreakPoints.desktop}) {
    width: 100%;
  }
  @media (max-width: ${BreakPoints.tablet}) {
    width: 100%;
  }
`;
