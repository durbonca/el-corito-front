import { PaginationContainer, NavLinks, PageNav } from "./pagination.styles";

export const Pagination = () => {
  return (
    <PaginationContainer>
      <NavLinks>
        <PageNav>Anterior</PageNav>
        <PageNav>1</PageNav>
        <PageNav>2</PageNav>
        <PageNav>3</PageNav>
        <PageNav>Siguiente</PageNav>
      </NavLinks>
    </PaginationContainer>
  );
};
