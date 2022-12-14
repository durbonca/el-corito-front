import { PaginationContainer, NavLinks, PageNav } from "./pagination.styles";

export const Pagination = ({ page, totalPages }) => {
  console.log("page", page);

  return (
    <PaginationContainer>
      <NavLinks>
        {page !== 0 && <PageNav>Anterior</PageNav>}
        <PageNav>1</PageNav>
        <PageNav>2</PageNav>
        {" ... "}
        <PageNav>{totalPages}</PageNav>
        <PageNav>Siguiente</PageNav>
      </NavLinks>
    </PaginationContainer>
  );
};
