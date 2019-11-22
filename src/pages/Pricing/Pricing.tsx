import * as React from 'react';
import Subscribe from '../../components/Subscribe';
import SectionTitle from '../../components/SectionTitle';
import PriceCard from '../../components/PriceCard';
import { prices } from '../../mockData/mockData';
import './Pricing.scss';
import TopSection from '../../components/TopSection';
export interface PricingProps {

}

const Pricing: React.FC<PricingProps> = () => {
  const pricesElements = prices.map(item => {
    return (
      <PriceCard
        key={item.id}
        {...item}
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
      title: 'Pricing',
      lHref: '/pricing'
    }
  ];
  return (
    <>
      <TopSection
        title="Pricing"
        links={links}
      />
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
          <p className="pricing-text">
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Animi vero accusantium sunt sit aliquam ipsum molestias autem perferendis,
            incidunt cumque necessitatibus cum amet cupiditate, ut accusamus. Animi, quo. Laboriosam, laborum.
          </p>
        </div>
      </section>
      <Subscribe/>
    </>
  );
}

export default Pricing;