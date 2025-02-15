import React from 'react';

const Pagination = ({ onPageChange, currentPage, blogs, pageSize }) => {
  if (!blogs || blogs.length === 0) {
    return null; // Không hiển thị nếu không có sản phẩm nào
  }

  const totalPages = Math.ceil(blogs.length / pageSize);

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
      <li
        className={`pagination-item ${pageNumber === currentPage ? "activePagination" : ""}`}
        key={pageNumber}
      >
        <button onClick={() => onPageChange(pageNumber)}>{pageNumber}</button>
      </li>
    ));
  };

  return (
    <ul className="pagination my-8 flex-wrap gap-1">
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Trước
        </button>
      </li>
      {renderPaginationLinks()}
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Tiếp
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
