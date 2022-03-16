import React from 'react';
import './Pagination.css';

const Pagination = ({ handleClickNext, handleClickPrev, info }) => {
  console.log(handleClickNext);
  console.log(handleClickPrev);
  console.log(info);
  return (
    <div className="pagination">

      < div className="pagination__item">
        <button onClick={handleClickPrev}>Prev</button>
      </div>

      <div className="pagination__item">
        <button onClick={handleClickNext}>Next</button>
      </div>
    </div >
  );
}

export default Pagination;