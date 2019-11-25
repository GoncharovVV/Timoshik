import * as React from 'react';
import './TopSection.scss';
import { NavLink } from 'react-router-dom';
export interface TopSectionProps {
  title: string,
  links: Array<{id: string, title: string, lHref: string}>
}

const TopSection: React.FC<TopSectionProps> = ({title, links}) => {
  const linksList = links.map(({id, title, lHref}) => {
    return (
      <li key={id}>
        <NavLink exact={true} activeClassName="active" to={lHref}>
          {title}
        </NavLink>
      </li>
    );
  });
  return (
    <section className="ftco-section top-section text_center">
      <ul className="top-section__links">
        {linksList}
      </ul>
      <h1>{title}</h1>
    </section>
  );
}

export default TopSection;