import * as React from 'react';
import './BrandItem.scss';
export interface BrandItemProps {
  title: string,
  image: any
}

const BrandItem: React.FC<BrandItemProps> = ({ title, image }) => {
  return (
    <a href="/" className="brand-item">
      <img src={image} alt={title} className="brand-item__image"/>
      <div className="brand-item__description">
        <span>Branding</span>
        <strong>{title}</strong>
      </div>
    </a>
  );
}

export default BrandItem;