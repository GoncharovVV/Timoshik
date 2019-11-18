import * as React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { work } from '../../mock/mockData';
import BrandItem from '../../components/BrandItem';
import Subscribe from '../../components/Subscribe';
export interface WorkProps {

}

const Work: React.SFC<WorkProps> = () => {
  const workElements = work.map(({title, id, image}) => {
    return (
      <BrandItem
        key={id}
        image={image}
        title={title}
      />
    );
  });
  return (
    <>
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