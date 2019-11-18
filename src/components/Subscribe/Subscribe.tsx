import * as React from 'react';
import SectionTitle from '../SectionTitle';
import './Subscribe.scss'
export interface SubscribeProps {

}

const Subscribe: React.SFC<SubscribeProps> = () => {
  return (
    <section className="parallax subscribe text_center">
      <div className="container">
        <div className=" section__title_container">
          <SectionTitle
            title="Subcribe to our Newsletter"
            description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in"
          />
        </div>
        <form className="subscribe-form">
          <input className="subscribe-form__input" type="text" placeholder="Enter email address"/>
          <button className="subscribe-form__button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Subscribe;