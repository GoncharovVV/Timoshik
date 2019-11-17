import * as React from 'react';
import Button from '../Button';
import './PriceCard.scss'
export interface PriceCardProps {
  title: string,
  price: number,
  details: string,
  description: string,
  packageData: {title: string, description: string}[]
}

const PriceCard: React.SFC<PriceCardProps> = ({ title, price, details, packageData}) => {
  const handleClick = () => {
    console.log('click');
  };
  const dataList = packageData.map(item => {
    return (
      <li>
        <strong>
          {item.title}
        </strong>
        {item.description}
      </li>
    );
  });
  return (
    <div className="price-card__container item_quoter">
      <div className="price-card  text_center">
        <h2 className="price-card__title">
          {title}
        </h2>
        <div className="price">
          <sup>$</sup>
          {price}
        </div>
        <span className="price-card__details">{details}</span>
        <Button classNames="btn_lg btn_transparent btn_border" label="Get Started" handleClick={handleClick}/>
        <span className="price-card__text">
          Enjoy All The Features
        </span>
        <ul className="price-card__list">
          {dataList}
          <li>All features</li>
        </ul>
      </div>
    </div>
  );
}

export default PriceCard;