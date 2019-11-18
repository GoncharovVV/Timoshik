import * as React from 'react';
import './PaginationItem.scss';
export interface PaginationItemProps {
  value: string,
  url: string
}

const PaginationItem: React.SFC<PaginationItemProps> = ({url, value}) => {
  let data;
  switch (value) {
    case 'arrLeft':
      data = <span> {'<'} </span>;
      break;
    case 'arrRight':
      data = <span>{'>'}</span>;
      break;
    default:
      data = <span>{value}</span>;
      break;
  }

  return (
    <li>
      <a href={url}>
        {data}
      </a>
    </li>
  );
}

export default PaginationItem;