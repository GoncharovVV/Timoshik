import * as React from 'react';
import Subscribe from '../../components/Subscribe';
import TopSection from '../../components/TopSection';
export interface ContactProps {

}

const Contact: React.SFC<ContactProps> = () => {
  const links = [
    {
      id: 'l1',
      title: 'Home',
      lHref: '/'
    },
    {
      id: 'l2',
      title: 'Blog',
      lHref: '/blog'
    }
  ];
  return (
    <>
      <TopSection
        title="Our Blog"
        links={links}
      />
      <Subscribe/>
    </>
  );
}

export default Contact;