import * as React from 'react';
import Subscribe from '../../components/Subscribe';
import SectionTitle from '../../components/SectionTitle';
export interface TeamProps {

}

const Team: React.FC<TeamProps> = () => {
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="text_center section__title_container">
            <SectionTitle
              title="Our Staff"
              description="Our Expert & Well Experience Staff"
            />
          </div>
          <div className="cards">

          </div>
        </div>
      </section>
      <Subscribe/>
    </>
  );
}

export default Team;