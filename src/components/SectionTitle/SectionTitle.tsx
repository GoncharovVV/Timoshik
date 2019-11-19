import * as React from 'react';
import './SectionTitle.scss';
export interface SectionTitleProps {
  title: string,
  description?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description }) => {
  return (
    <>
      <h2 className="section__title">{title}</h2>
      <span className="title__description">{description}</span>
    </>
  );
}

export default SectionTitle;