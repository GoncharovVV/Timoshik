import * as React from 'react';
import ServiceGoalItem from '../../components/ServiceGoalItem';
import Subscribe from '../../components/Subscribe';
import GoalItem from '../../components/GoalItem';
import SectionTitle from '../../components/SectionTitle';
import { goalItems } from '../../mock/mockData';
export interface ServicesPageProps {

}

const ServicesPage: React.SFC<ServicesPageProps> = () => {
  const goalElements = goalItems.map((item) => {
    return (
      <GoalItem
        key={item.id}
        title={item.title}
        description={item.description}
        type={item.type}
      />
    );
  });
  return (
    <>
      <section className="ftco-section">
        <div className="text_center section__title_container">
          <SectionTitle
            title="Our Service Keeps you Happy"
            description="Search Engine & Social Media Optimization Experts"
          />
        </div>
        <div className="container cards">
          {goalElements}
        </div>
      </section>
      <ServiceGoalItem/>
      <Subscribe/>
    </>
  );
}

export default ServicesPage;