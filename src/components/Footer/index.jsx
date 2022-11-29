import {
  FooterContainer,
  StyledDivSection,
  StyledPCopyright,
  StyledLink
} from "./Footer.styles";

export const Footer = () => (
  <FooterContainer>
    <StyledDivSection>
      <StyledPCopyright>
        Copyright © {new Date().getFullYear()} El Corito Histórico. Todos los
        derechos reservados.{" "}
      </StyledPCopyright>
      <span>
        Web desarrollada por{" "}
        <StyledLink
          title="Web de desarrollador Durbonca"
          href="https://durbonca.com"
          target="_blank"
          rel="External designer noreferrer"
        >
          https://durbonca.com
        </StyledLink>
      </span>
    </StyledDivSection>
  </FooterContainer>
);
