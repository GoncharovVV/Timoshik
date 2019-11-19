import * as React from 'react';
import './TeamItem.scss';

export interface TeamItemProps {
  id: string,
  image: string,
  clientName: string,
  jobPosition: string,
  description: string
}

const TeamItem: React.SFC<TeamItemProps> = ({image, clientName, jobPosition, description}) => {
  return (
    <div className="item_quoter item_team">
      <a href="/" className="team__link text_center">
        <img
          className="team__img"
          src={image}
          alt={clientName}
        />
        <h3 className="team__title">
          {clientName}
        </h3>
        <p className="team__position">
          {jobPosition}
        </p>
        <p className="team__description">
          {description}
        </p>
      </a>
    </div>
  );
}

export default TeamItem;