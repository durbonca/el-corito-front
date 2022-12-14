import { PaginationContainer, NavLinks, PageNav } from "./pagination.styles";

export const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <PaginationContainer>
      <NavLinks>
        {page !== 1 && (
          <>
            <PageNav onClick={() => setPage(page - 1)}>Anterior</PageNav>
            <PageNav onClick={() => setPage(page - 1)}>{page - 1}</PageNav>
          </>
        )}
        <PageNav active>{page}</PageNav>
        {page < totalPages - 1 && (
          <>
            <PageNav onClick={() => setPage(page + 1)}>{page + 1}</PageNav>
            {" ... "}
          </>
        )}
        {page !== totalPages && (
          <>
            <PageNav onClick={() => setPage(totalPages)}>{totalPages}</PageNav>
            <PageNav onClick={() => setPage(page + 1)}>Siguiente</PageNav>
          </>
        )}
      </NavLinks>
    </PaginationContainer>
  );
};
