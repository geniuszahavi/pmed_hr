// Pagination.jsx
import React from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex gap-3 items-center">
      <button
        className={`flex justify-center items-center bg-white border border-[#DFE2E9] rounded-[4px] h-[32px] w-[32px] ${
          currentPage === 0 && 'cursor-not-allowed'
        }`}
        disabled={currentPage === 0}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`flex justify-center items-center bg-white border border-[#DFE2E9] rounded-[4px] h-[32px] w-[32px] ${
            currentPage === page ? 'bg-[#EDF0F8] text-[#051438]' : ''
          }`}
          disabled={currentPage === page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={`flex justify-center items-center bg-white border border-[#DFE2E9] rounded-[4px] h-[32px] w-[32px] ${
          currentPage === totalPages && 'cursor-not-allowed'
        }`}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRightIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Pagination;
