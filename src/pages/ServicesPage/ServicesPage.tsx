import * as React from 'react';
import ServiceGoalItem from '../../components/ServiceGoalItem';
import Subscribe from '../../components/Subscribe';
import GoalItem from '../../components/GoalItem';
import SectionTitle from '../../components/SectionTitle';
import { goalItems } from '../../mockData/mockData';
import TopSection from '../../components/TopSection';
export interface ServicesPageProps {

}

const ServicesPage: React.FC<ServicesPageProps> = () => {
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
  const links = [
    {
      id: 'l1',
      title: 'Home',
      lHref: '/'
    },
    {
      id: 'l2',
      title: 'Services',
      lHref: '/services'
    }
  ];
  return (
    <>
      <TopSection
        title="Services"
        links={links}
      />
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