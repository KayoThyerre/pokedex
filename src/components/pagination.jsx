import React from "react";

const Pagination = (props) => {
    const {page, totalPages, onPreviousClick, onNextClick} = props;
    return (
        <div className="pagination-container">
            <button onClick={onPreviousClick}>◀️</button>
            <div>{page} de {totalPages}</div>
            <button onClick={onNextClick}>▶️</button>
        </div>
    )
}

export default Pagination;