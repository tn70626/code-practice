import React from 'react';

export default function Pagination({ gotoPrevPage, gotoNextPage }) {
  return (
    <div>
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous page</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next page</button>}
    </div>
  );
}
