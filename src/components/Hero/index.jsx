import {
  StyledDivContainer,
  StyledDivHero,
  StyledDivWelcome,
  StyledDivColumn,
  StyledPTag,
  StyledH2Title,
  StyledATitle
} from "./Hero.styles";

export const Hero = () => {
  return (
    <StyledDivContainer>
      <StyledDivHero>
        <StyledDivWelcome>
          <StyledDivColumn>
            <StyledPTag>ÚLTIMO EPISODIO // 7 de septiembre de 2022</StyledPTag>
            <StyledH2Title>
              <StyledATitle>JOSÉ DOMINGO DÍAZ</StyledATitle>
            </StyledH2Title>
            <p>
              En este Corito Histórico, los muchachos Javier Lara (en Twitter
              @vzla_apesta) y Doriann Márquez (en Twitter @Hostioso0294) traen a
              un poco conocido villano de la Guerra de Independencia, quién por
              […]
            </p>
          </StyledDivColumn>
        </StyledDivWelcome>
      </StyledDivHero>
    </StyledDivContainer>
  );
};
