import { PaginationContainer, NavLinks, PageNav } from "./pagination.styles";

export const Pagination = ({ page, totalPages, setPage, setPosts }) => {
  const handlePageChange = args => {
    window.scrollTo(0, 0);
    setPage(args);
    setPosts([]);
  };

  return (
    <PaginationContainer>
      <NavLinks>
        {page !== 1 && (
          <>
            <PageNav onClick={() => handlePageChange(page - 1)}>
              Anterior
            </PageNav>
            {page > 2 && (
              <>
                <PageNav onClick={() => handlePageChange(1)}>{1}</PageNav>
                {" ... "}
              </>
            )}
            <PageNav onClick={() => handlePageChange(page - 1)}>
              {page - 1}
            </PageNav>
          </>
        )}
        <PageNav active>{page}</PageNav>
        {page < totalPages - 1 && (
          <>
            <PageNav onClick={() => handlePageChange(page + 1)}>
              {page + 1}
            </PageNav>
            {" ... "}
          </>
        )}
        {page !== totalPages && (
          <>
            <PageNav onClick={() => handlePageChange(totalPages)}>
              {totalPages}
            </PageNav>
            <PageNav onClick={() => handlePageChange(page + 1)}>
              Siguiente
            </PageNav>
          </>
        )}
      </NavLinks>
    </PaginationContainer>
  );
};
