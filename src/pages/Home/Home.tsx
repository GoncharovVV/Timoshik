import * as React from 'react';
import Intro from '../../components/Intro';
import './Home.scss';
import SectionTitle from '../../components/SectionTitle';
import { goalItems } from '../../mock/mockData';
import { work } from '../../mock/mockData';
import { prices } from '../../mock/mockData';
import GoalItem from '../../components/GoalItem';
import ServiceGoalItem from '../../components/ServiceGoalItem';
import ShortStatistic from '../../components/ShortStatistic';
import BrandItem from '../../components/BrandItem';
import PriceCard from '../../components/PriceCard';
export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
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
  const workElements = work.map(({title, id, image}) => {
    return (
      <BrandItem
        key={id}
        image={image}
        title={title}/>
    );
  });
  const pricesElements = prices.map(item => {
    return (
      <PriceCard
        key={item.id}
        {...item}
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
      <section className="ftco-section ftco__services">
        <div className="container">
          <div className="text_center section__title_container">
            <SectionTitle
              title="Our Service Keeps you Happy"
              description="Search Engine & Social Media Optimization Experts"
            />
          </div>
          <div className="cards">
            {goalElements}
          </div>
        </div>
        <ServiceGoalItem/>
        <ShortStatistic/>
      </section>
      <section className="ftco-section">
        <div className="text_center section__title_container">
          <SectionTitle
            title="Our Portfolio"
            description="We're Happy to share our complete Projects"
          />
        </div>
        <div className="cards container-fluid">
          {workElements}
        </div>
      </section>
      <section className="ftco-section ftco-section_grey">
        <div className="container">
          <div className="text_center section__title_container">
            <SectionTitle
              title="Our Best Pricing"
              description="Pricing Plans"
            />
          </div>
          <div className="cards">
            {pricesElements}
          </div>
        </div>
      </section>
      <section className="cards get-quote">
        <div className="half_lg get-quote__left">
          <div className="get-quote__content">
            
          </div>
        </div>

        <div className="half_lg get-quote__right">
          <div className="get-quote__content"></div>
        </div>
      </section>
    </>
  );
}

export default Home;