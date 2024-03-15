import React from "react";
import "./styles.css";

export const Pagination = ({ page, totalPages, handlePageChange }) => {
    const getPageNumbers = () => {
        const max_pages = 6;
        const page_numbers = [];
        let start_page = Math.max(1, page - Math.floor(max_pages / 2));
        let end_page = Math.min(totalPages, start_page + max_pages - 1);

        if (totalPages > max_pages) {
            if (end_page === totalPages) {
                start_page = Math.max(1, totalPages - max_pages + 1);
            } else if (start_page === 1) {
                end_page = max_pages;
            } else {
                page_numbers.push("...");
            }
        }
        for (let i = start_page; i <= end_page; i++) {
            page_numbers.push(i);
        }

        if (totalPages > max_pages && end_page < totalPages) {
            if (totalPages - end_page === 1) {
                page_numbers.push(end_page + 1);
            } else {
                page_numbers.push("...");
                page_numbers.push(totalPages);
            }
        }
        return page_numbers;
    };

    return (
        <div className="pagination-container">
            <button 
                className="page-limit" 
                disabled={page === 1}
                onClick={() => handlePageChange(page-1)}
            >
                {"<"}
            </button>
            {getPageNumbers().map((number, index) => {
                const numberClass = number === page ? "pagBtn selected" : "pagBtn";
                return (
                    <button 
                        className={numberClass}
                        key={index}
                        onClick={() => {
                            if(typeof number === "number") {
                                handlePageChange(number);
                            }
                        }}
                    >
                        {number}
                    </button>
                );
            })}
            <button
                className="page-limit" 
                disabled={page === totalPages}
                onClick={() => handlePageChange(page+1)}
            >
                {">"}
            </button>
        </div>
    );
};
