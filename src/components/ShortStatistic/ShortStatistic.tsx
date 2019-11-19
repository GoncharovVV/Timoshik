import * as React from 'react';
import './ShortStatistic.scss';
import { stat } from '../../mock/mockData';

export interface ShortStatisticProps {

}

const ShortStatistic: React.FC<ShortStatisticProps> = () => {
  const statElements = stat.map(({ title, description, id }) => {
    return (
      <div className="item_quoter" key={id}>
        <strong className="item__title">
          {title}
        </strong>
        <span className="item__descr">
          {description}
        </span>
      </div>
    );
  });
  return (
    <div className="parallax short-stat">
      <div className="container cards text_center">
        {statElements}
      </div>
    </div>
  );
}

export default ShortStatistic;