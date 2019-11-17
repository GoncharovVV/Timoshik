import * as React from 'react';
import serviceImage from '../../assets/images/about.jpg';
import './ServiceGoalItem.scss';
import SectionTitle from '../SectionTitle';
import { ReactComponent as Pencil } from '../../assets/icons/pencil.svg';
import { ReactComponent as PieChart } from '../../assets/icons/pie-chart.svg';
import { ReactComponent as Web } from '../../assets/icons/web.svg';

// pencil.svg pie-chart.svg web.svg
import { serviceItems } from '../../mock/mockData';
export interface ServiceGoalItemProps {

}

const ServiceGoalItem: React.SFC<ServiceGoalItemProps> = () => {
  const goalElements = serviceItems.map(({title, description, id, iconType}) => {
    const Icon = () => {
      switch (iconType) {
        case "web":
          return <Web className="svg-icon"/>;
        case "pencil":
          return <Pencil className="svg-icon"/>;
        case "pie-chart":
          return <PieChart className="svg-icon"/>;
        default:
          return <Web className="svg-icon"/>;
      }
    }
    return (
      <div className="service__item" key={id}>
        <div className="service__logo">
          <Icon/>
        </div>
        <div className="service__details">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="cards cards_stretch">
      <div className="half_lg service__img_holder">
        <img className="service__img" src={serviceImage} alt="service"/>
      </div>
      <div className="half_lg service__right">
        <SectionTitle
          title="Our Service Keeps you Happy"
          description="Search Engine & Social Media Optimization Experts"
        />
        {goalElements}
      </div>
    </div>
  );
}

export default ServiceGoalItem;