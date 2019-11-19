import * as React from 'react';
import Subscribe from '../../components/Subscribe';
import TopSection from '../../components/TopSection';
import Button from '../../components/Button';
import map from '../../assets/images/map.jpg';
import './Contact.scss'
export interface ContactProps {

}

const Contact: React.FC<ContactProps> = () => {
  const links = [
    {
      id: 'l1',
      title: 'Home',
      lHref: '/'
    },
    {
      id: 'l2',
      title: 'Contact',
      lHref: '/contact'
    }
  ];
  const handleClickForm = () => {
    console.log('form');
  };
  return (
    <>
      <TopSection
        title="Contact"
        links={links}
      />
      <section className="ftco-section">
        <div className="container">
          <h2 className="contact__title">Contact Information</h2>
          <div className="cards cards__contact">
            <p className="item_quoter contact__details">
              <span>Address:</span>
              198 West 21th Street, Suite 721 New York NY 10016
            </p>
            <p className="item_quoter contact__details">
              <span>Phone:</span>
              <a href="tel://1234567920">+ 1235 2355 98</a>
            </p>
            <p className="item_quoter contact__details">
              <span>Email:</span>
              <a href="mailto:info@yoursite.com">info@yoursite.com</a>
            </p>
            <p className="item_quoter contact__details">
              <span>Website</span>
              <a href="/">yoursite.com</a>
            </p>
          </div>
          <div className="cards">
            <div className="half_lg contact__form">
              <form className="">
                <input type="text" className="form-control" placeholder="Full Name" name="fullname"/>
                <input type="text" className="form-control" placeholder="Email" name="email"/>
                <input type="text" className="form-control" placeholder="Phone" name="phone"/>
                <input type="text" className="form-control" placeholder="Website" name="website"/>
                <textarea className="form-control textarea" placeholder="Message" name="message" id="" cols={30} rows={10}></textarea>
                <Button
                  classNames="btn_lg btn_full btn_border"
                  label="Send Message"
                  handleClick={handleClickForm}
                />
              </form>
            </div>
            <div className="half_lg map__holder">
              <img className="map" src={map} alt=""/>
            </div>
          </div>
        </div>
      </section>
      <Subscribe/>
    </>
  );
}

export default Contact;