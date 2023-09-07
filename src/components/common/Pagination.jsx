import React, { useState } from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <nav dir="ltr">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => handlePageClick(currentPage - 1)}
          >
            قبلی
          </button>
        </li>

        {Array.from({ length: totalPages }).map((_, index) => (
          <li
            key={index}
            className={`page-item ${
              currentPage === index + 1 ? "rounded-full bg-slate-300" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => handlePageClick(currentPage + 1)}
          >
            بعدی
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
