import * as React from 'react';
import Intro from '../../components/Intro';
import './Home.scss';
import SectionTitle from '../../components/SectionTitle';
import {
  goalItems,
  blogList,
  work,
  prices
  } from '../../mock/mockData';
import GoalItem from '../../components/GoalItem';
import ServiceGoalItem from '../../components/ServiceGoalItem';
import ShortStatistic from '../../components/ShortStatistic';
import BrandItem from '../../components/BrandItem';
import PriceCard from '../../components/PriceCard';
import { ReactComponent as Check } from '../../assets/icons/check.svg';
import Button from '../../components/Button';
import Testimony from '../../components/Testimony';
import Subscribe from '../../components/Subscribe';
import BlogItem from '../../components/BlogItem';

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  const goalElements = goalItems.map((item) => {
    return (
      <GoalItem
        key={item.id}
        title={item.title}
        description={item.description}
        type={item.type}
      />
    );
  });
  const workElements = work.map(({title, id, image}) => {
    return (
      <BrandItem
        key={id}
        image={image}
        title={title}
      />
    );
  });
  const pricesElements = prices.map(item => {
    return (
      <PriceCard
        key={item.id}
        {...item}
      />
    );
  });
  const handleClickForm = () => {
    console.log('form');
  }
  const listBlog = blogList.map(item => {
    return (
      <BlogItem
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <>
      <section className="home">
        <Intro/>
        <div className="parallax">
          <h3 className="title_md title_white container">
            We Provide High Quality Services
          </h3>
        </div>
      </section>
      <section className="ftco-section ftco__services">
        <div className="container">
          <div className="text_center section__title_container">
            <SectionTitle
              title="Our Service Keeps you Happy"
              description="Search Engine & Social Media Optimization Experts"
            />
          </div>
          <div className="cards">
            {goalElements}
          </div>
        </div>
        <ServiceGoalItem/>
        <ShortStatistic/>
      </section>
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
      <section className="ftco-section ftco-section_grey">
        <div className="container">
          <div className="text_center section__title_container">
            <SectionTitle
              title="Our Best Pricing"
              description="Pricing Plans"
            />
          </div>
          <div className="cards">
            {pricesElements}
          </div>
        </div>
      </section>
      <section className="cards get-quote">
        <div className="half_lg get-quote__left">
          <div className="get-quote__content">
            <h2 className="section__title">
              Reasons for Choosing Us
            </h2>
            <p>
              Even the all-powerful Pointing has no control about the blind texts it
              is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
              Because there were thousands of bad Commas, wild Question Marks and devious Semikoli
            </p>
            <ul className="quote__list">
              <li> <Check className="svg-icon"/> Consectetur adipisicing elit</li>
              <li> <Check className="svg-icon"/> Adipisci repellat accusamus</li>
              <li> <Check className="svg-icon"/> Tempore reprehenderit vitae</li>
            </ul>
          </div>
        </div>

        <div className="half_lg get-quote__right">
          <div className="get-quote__content">
            <h2 className="section__title">
              Get a Free Quote
            </h2>
            <form className="quote cards">
              <div className="form-control__holder">
                <input type="text" className="form-control" placeholder="Full Name" name="fullname"/>
              </div>
              <div className="form-control__holder">
                <input type="text" className="form-control" placeholder="Email" name="email"/>
              </div>
              <div className="form-control__holder">
                <input type="text" className="form-control" placeholder="Phone" name="phone"/>
              </div>
              <div className="form-control__holder">
                <input type="text" className="form-control" placeholder="Website" name="website"/>
              </div>
              <textarea className="form-control textarea" placeholder="Message" name="message" id="" cols={30} rows={10}></textarea>
              <Button
                classNames="btn_lg btn_full btn_border"
                label="Get a Quote"
                handleClick={handleClickForm}
              />
            </form>
          </div>
        </div>
      </section>
      <Testimony/>
      <Subscribe/>
      <section className="ftco-section">
        <div className="container">
          <div className="text_center section__title_container">
            <SectionTitle
              title="Our Portfolio"
              description="We're Happy to share our complete Projects"
            />
          </div>
          <div className="cards">
            {listBlog}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;