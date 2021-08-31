import ReactPaginate from 'react-paginate';
import PropTypes from "prop-types";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

export function Pagination({totalPages, onClick, currentPage}) {
    return (
        <ReactPaginate
            previousLabel={<AiFillCaretLeft />}
            nextLabel={<AiFillCaretRight />}
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
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};