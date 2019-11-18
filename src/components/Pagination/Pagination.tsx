import * as React from 'react';
import PaginationItem from '../PaginationItem';
import './Pagination.scss'
export interface PaginationProps {
  arr: Array<{value: string, url: string, id: string}>
}

const Pagination: React.SFC<PaginationProps> = ({ arr }) => {
  const paginations = arr.map(({value, url, id}) => {
    return (
      <PaginationItem
        key={id}
        value = {value}
        url = {url}
      />
    )
  });
  return (
    <ul className="pagination-list">
      {paginations}
    </ul>
  );
}

export default Pagination;