import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css'; 
import Pin from './Pin';
import ReactPaginate from 'react-paginate';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

const breakpointObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 3,
    500: 1,
}

const Layout = ({ pins }) => {

  const [pageNumber, setPageNumber] = useState(0);

  const pinsPerPage = 10;
  const pagesVisited = pageNumber * pinsPerPage;

  const pagedPins = pins.slice(pagesVisited, pagesVisited + pinsPerPage);
  const displayPagedPins = pagedPins.map((pin) =><Pin key={pin.id} pin={ pin } />);

  const pageCount = Math.ceil(pins.length / pinsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
    <Masonry className="layout-masonry" breakpointCols= { breakpointObj }>
    {displayPagedPins}
    </Masonry>
      <div className="pagination">
        <ReactPaginate
        previousLabel={<MdOutlineArrowBackIosNew fontSize={21} fontWeight= {700}  />}
        nextLabel={<MdOutlineArrowForwardIos fontSize={21} />}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        />
      </div>

  </>
  )
}

export default Layout