import * as React from 'react';
import Intro from '../../components/Intro';
import './Home.scss';
import SectionTitle from '../../components/SectionTitle';
import { goalItems } from '../../mock/mockData';
import GoalItem from '../../components/GoalItem';
export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  const elements = goalItems.map((item) => {
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
      <section className="home">
        <Intro/>
        <div className="parallax">
          <h3 className="title_md title_white container">
            We Provide High Quality Services
          </h3>
        </div>
      </section>
      <section className="ftco-section">
        <div className="container">
          <SectionTitle
            title="Our Service Keeps you Happy"
            description="Search Engine & Social Media Optimization Experts"
          />
          <div className="cards">
            {elements}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;