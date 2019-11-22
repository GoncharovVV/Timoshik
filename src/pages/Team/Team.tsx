import * as React from 'react';
import Subscribe from '../../components/Subscribe';
import SectionTitle from '../../components/SectionTitle';
import TeamItem from '../../components/TeamItem';
import { testimony } from '../../mockData/mockData';
import './Team.scss'
import TopSection from '../../components/TopSection';
export interface TeamProps {

}

const Team: React.FC<TeamProps> = () => {
  const links = [
    {
      id: 'l1',
      title: 'Home',
      lHref: '/'
    },
    {
      id: 'l2',
      title: 'Team',
      lHref: '/team'
    }
  ];
  const items = testimony.map(item => {
    return (
      <TeamItem
        key={item.id}
        {...item}
      />
    );
  });
  return (
    <>
      <TopSection
        title="Team"
        links={links}
      />
      <section className="ftco-section">
        <div className="container">
          <div className="text_center section__title_container">
            <SectionTitle
              title="Our Staff"
              description="Our Expert & Well Experience Staff"
            />
          </div>
          <div className="cards">
            {items}
          </div>
          <p className="team-text">
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

export default Team;