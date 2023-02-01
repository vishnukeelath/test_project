import React, { useState } from 'react';
import Masonry from 'react-masonry-css'; 
import Pin from './Pin';

const breakpointObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
}

const Layout = ({ pins }) => {
  
console.log(pins)
  return (
    <Masonry className="layout-masonry" breakpointCols= { breakpointObj }>
    {pins?.map((pin) => <Pin key={pin.id} pin={ pin } />)}
    </Masonry>
  )
}

export default Layout




































import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css'; 
import Pin from './Pin';
import ReactPaginate from 'react-paginate';

const breakpointObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
}

const Layout = ({ pins }) => {

  const PinDisplay = ({ currentPins }) => {
    <Masonry className="layout-masonry" breakpointCols= { breakpointObj }>
    {currentPins?.map((pin) => <Pin key={pin.id} pin={ pin } />)}
    </Masonry>
  };

  const PaginatedPins = ({ itemsPerPage }) => {
    const [itemOffset, setItemOffset] = useState(0);
    const [currentPins, setCurrentPins] = useState(null);
    const [pageCount, setPageCount] = useState(0);

      useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentPins(pins.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(pins.length / itemsPerPage));
      }, [itemOffset]);    


    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % pins.length;

      setItemOffset(newOffset);
    };

    return (
      <>
        <PinDisplay currentPins={currentPins} />
        <ReactPaginate
          nextLabel={"next >"}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={"< previous"}
          renderOnZeroPageCount={null}
        />
      </>
    )
  };
  

  return (
     <PaginatedPins itemsPerPage={5} />
  )
}

export default Layout







