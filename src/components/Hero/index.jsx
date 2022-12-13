import { breakText, wysiwygText, getPostDate } from "../../utils/functions";
import {
  StyledDivContainer,
  StyledDivHero,
  StyledDivWelcome,
  StyledDivColumn,
  StyledPTag,
  StyledH2Title,
  StyledATitle
} from "./Hero.styles";

export const Hero = ({ title, date_creation, body }) => {
  return (
    <StyledDivContainer>
      <StyledDivHero>
        <StyledDivWelcome>
          <StyledDivColumn>
            <StyledPTag>
              ÚLTIMO EPISODIO // {date_creation && getPostDate(date_creation)}
            </StyledPTag>
            <StyledH2Title>
              <StyledATitle>{title}</StyledATitle>
            </StyledH2Title>
            <p>
              {body && breakText(wysiwygText(body), 50)}
              […]
            </p>
          </StyledDivColumn>
        </StyledDivWelcome>
      </StyledDivHero>
    </StyledDivContainer>
  );
};
