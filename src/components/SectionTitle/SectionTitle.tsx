import * as React from 'react';
import './SectionTitle.scss';
export interface SectionTitleProps {
  title: string,
  description?: string
}

const SectionTitle: React.SFC<SectionTitleProps> = ({ title, description }) => {
  return (
    <div className="text_center section__title_container">
      <h2 className="section__title">{title}</h2>
      <span className="title__description">{description}</span>
    </div>
  );
}

export default SectionTitle;