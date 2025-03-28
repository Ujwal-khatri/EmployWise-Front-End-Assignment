import React from 'react';
import '../../styles/Users.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button className='previous' onClick={() => onPageChange(currentPage - 1)}disabled={currentPage <= 1}>
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button className='next' onClick={() => onPageChange(currentPage + 1)}disabled={currentPage >= totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
