import * as React from 'react';
import './GoalItem.scss';
import { ReactComponent as Creativity } from '../../assets/icons/creativity.svg';
import { ReactComponent as Market } from '../../assets/icons/market.svg';
import { ReactComponent as Research } from '../../assets/icons/research.svg';

export interface GoalItemProps {
  title: string,
  description: string,
  type?: string
}

const GoalItem: React.SFC<GoalItemProps> = ({ title, description, type }) => {
  const Icon = () => {
    switch (type) {
      case "market":
        return <Market className="svg-icon"/>;
      case "creativity":
        return <Creativity className="svg-icon"/>;
      case "research":
        return <Research className="svg-icon"/>;
      default:
        return <Market className="svg-icon"/>;
    }
  }
  return (
    <div className="goal">
      <div className="goal__icon">
        <Icon />
      </div>
      <h3 className="goal__title">
        {title}
      </h3>
      <p className="goal__description">
        {description}
      </p>
    </div>
  );
}

export default GoalItem;