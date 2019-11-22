import * as React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { work } from '../../mockData/mockData';
import BrandItem from '../../components/BrandItem';
import Subscribe from '../../components/Subscribe';
import TopSection from '../../components/TopSection';
export interface WorkProps {

}

const Work: React.FC<WorkProps> = () => {
  const workElements = work.map(({title, id, image}) => {
    return (
      <BrandItem
        key={id}
        image={image}
        title={title}
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
      title: 'Work',
      lHref: '/work'
    }
  ];
  return (
    <>
      <TopSection
        title="Work"
        links={links}
      />
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
      <Subscribe/>
    </>
  );
}

export default Work;