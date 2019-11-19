import * as React from 'react';
import './Intro.scss';
import Button from '../Button';
import Swiper, { ReactIdSwiperProps } from 'react-id-swiper';
import 'swiper/css/swiper.css';
import slideItem1 from '../../assets/images/dashboard_full_2.png';
import slideItem2 from '../../assets/images/dashboard_full_3.png';

export interface IntroProps {}

const Intro: React.FC<IntroProps> = () => {
  const handleClick = () => {
    console.log('click');
  };
  const params: ReactIdSwiperProps = {
    effect: 'fade',
    spaceBetween: 30,
    autoplay:
    {
      delay: 3000
    }
  }
  return (
    <section className="intro">
      <div className="container-fluid">
        <div className="intro__left">
          <div className="intro__left_content">
            <h1 className="title title_blue title_large">Template for ...</h1>
            <p className="text text__md">
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
            <div className="btn__holder">
              <Button classNames="btn_lg btn_full btn_border" label="Get a Quote" handleClick={handleClick}/>
              <Button classNames="btn_border btn_transparent btn_lg" label="Our Portfolio" handleClick={handleClick}/>
            </div>
          </div>
        </div>
        <div className="intro__right">
          <Swiper {...params}>
            <img src={slideItem1} alt="item1"/>
            <img src={slideItem2} alt="item3"/>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Intro;