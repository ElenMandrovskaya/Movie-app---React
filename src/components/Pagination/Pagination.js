import ReactPaginate from 'react-paginate';

export function Pagination({totalPages, onClick, currentPage}) {
    return (
        <ReactPaginate
            previousLabel={'< prev'}
            nextLabel={'next >'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={4}
            onPageChange={onClick}
            containerClassName={'pagination'}
            activeClassName={'activepage'}
            initialPage={currentPage - 1}
            />
    )
}