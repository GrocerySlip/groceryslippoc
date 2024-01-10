import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  if (pages <= 1) {
    return null; // Don't render pagination if there's only one page
  }

  const renderPageNumbers = () => {
    const items = [];
    const totalPages = Math.min(pages, 22); // Ensure that totalPages doesn't exceed 22

    if (totalPages <= 5) {
      // Render all pages if total pages are less than or equal to 5
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <LinkContainer
            key={i}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${i}`
                  : `/page/${i}`
                : `/admin/productlist/${i}`
            }
          >
            <Pagination.Item active={i === page}>{i}</Pagination.Item>
          </LinkContainer>
        );
      }
    } else {
      // Render ellipsis (...) before and after current page
      const startPage = Math.max(1, page - 2);
      const endPage = Math.min(totalPages, startPage + 4);

      if (startPage > 1) {
        items.push(
          <LinkContainer
            key="first"
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/1`
                  : `/page/1`
                : `/admin/productlist/1`
            }
          >
            <Pagination.First />
          </LinkContainer>
        );
        items.push(
          <LinkContainer
            key="prev"
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${page - 1}`
                  : `/page/${page - 1}`
                : `/admin/productlist/${page - 1}`
            }
          >
            <Pagination.Prev disabled={page === 1} />
          </LinkContainer>
        );
      }

      for (let i = startPage; i <= endPage; i++) {
        items.push(
          <LinkContainer
            key={i}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${i}`
                  : `/page/${i}`
                : `/admin/productlist/${i}`
            }
          >
            <Pagination.Item active={i === page}>{i}</Pagination.Item>
          </LinkContainer>
        );
      }

      if (endPage < totalPages) {
        items.push(
          <LinkContainer
            key="next"
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${page + 1}`
                  : `/page/${page + 1}`
                : `/admin/productlist/${page + 1}`
            }
          >
            <Pagination.Next disabled={page === totalPages} />
          </LinkContainer>

          // <Pagination.Next
          //   key="next"
          //   onClick={() =>
          //     handlePaginationClick(
          //       !isAdmin
          //         ? keyword
          //           ? `/search/${keyword}/page/${page + 1}`
          //           : `/page/${page + 1}`
          //         : `/admin/productlist/${page + 1}`
          //     )
          //   }
          //   disabled={page === totalPages}
          // />
        );
        items.push(
          <LinkContainer
            key="last"
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${totalPages}`
                  : `/page/${totalPages}`
                : `/admin/productlist/${totalPages}`
            }
          >
            <Pagination.Last />
          </LinkContainer>
        );
      }
    }

    return items;
  };

  const handlePaginationClick = (to) => {
    // Handle pagination click if needed
    console.log("Navigate to:", to);
  };

  return <Pagination>{renderPageNumbers()}</Pagination>;
};

export default Paginate;
