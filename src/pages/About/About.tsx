import * as React from 'react';
import Subscribe from '../../components/Subscribe';
import Testimony from '../../components/Testimony';
import ShortStatistic from '../../components/ShortStatistic';
import TopSection from '../../components/TopSection';
import serviceImage from '../../assets/images/about.jpg';
import './About.scss'
import Button from '../../components/Button';
export interface AboutProps {

}

const About: React.FC<AboutProps> = () => {
  const links = [
    {
      id: 'l1',
      title: 'Home',
      lHref: '/'
    },
    {
      id: 'l2',
      title: 'About',
      lHref: '/about'
    }
  ];
  const handleClick = () => {
    console.log('click');
  };
  return (
    <>
      <TopSection
        title="About Us"
        links={links}
      />
      <section className="ftco-section">
        <div className="container cards cards_stretch">
          <div className="half_lg cards cards_stretch">
            <img src={serviceImage} className="image-fit" alt=""/>
          </div>
          <div className="half_lg about-right">
            <div className="button-row">
              <Button classNames="btn_lg btn_full btn_border" label="What we do" handleClick={handleClick}/>
              <Button classNames="btn_border btn_transparent btn_lg" label="Our mission" handleClick={handleClick}/>
              <Button classNames="btn_border btn_transparent btn_lg" label="Our goal" handleClick={handleClick}/>
            </div>
            <div>
              <h2>We Offer High Quality Services</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
            </div>
          </div>
        </div>
      </section>
      <ShortStatistic/>
      <Testimony/>
      <Subscribe/>
    </>
  );
}

export default About;