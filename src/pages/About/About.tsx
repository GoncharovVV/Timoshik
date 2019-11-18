import * as React from 'react';
import Subscribe from '../../components/Subscribe';
import Testimony from '../../components/Testimony';
import ShortStatistic from '../../components/ShortStatistic';
export interface AboutProps {

}

const About: React.SFC<AboutProps> = () => {
  return (
    <>
      <section>About</section>
      <ShortStatistic/>
      <Testimony/>
      <Subscribe/>
    </>
  );
}

export default About;