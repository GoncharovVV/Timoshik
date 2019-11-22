import * as React from 'react';
import './Testimony.scss';
import SectionTitle from '../SectionTitle';
import Swiper, { ReactIdSwiperProps } from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { testimony } from '../../mockData/mockData';
import { ReactComponent as QuoteLeft } from '../../assets/icons/quote-left.svg';
//
export interface TestimonyProps {
  id?: string,
  clientName?: string,
  image?: any,
  jobPosition?: string,
  description?: string
}

const Testimony: React.FC<TestimonyProps> = () => {
  const params: ReactIdSwiperProps = {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }
  const workElements = testimony.map((item) => {
    return (
      <div className="testimony-item" key={item.id}>
        <div className="testimony-item__image">
          <img src={item.image} alt={item.clientName}/>
          <div className="testimony-item__ico">
            <QuoteLeft className="svg-icon"/>
          </div>
        </div>
        <p className="testimony-item__description">
          {item.description}
        </p>
        <p className="testimony-item__name">
          {item.clientName}
        </p>
        <p className="testimony-item__job">
          {item.jobPosition}
        </p>
      </div>
    );
  });
  return (
    <section className="ftco-section testimony-section">
      <div className="text_center section__title_container">
        <SectionTitle
          title="Testimony"
          description="Our Happy Customer Says"
        />
      </div>
      <div className="container text_center">
        <Swiper {...params}>
          {workElements}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimony;