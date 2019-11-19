import * as React from 'react';
import Button from '../Button';
import classnames from 'classnames';
import './Modal.scss';
export interface ModalProps {
  hidden: boolean,
  toggleModal: ()=> void,
}

const Modal: React.FC<ModalProps> = ({hidden = true, toggleModal}) => {
  const handleClickForm = () => {
    console.log('click');
  };

  const hintClassName = classnames('modal__wrapper', { 'hidden': !hidden});
  return (
    <div className={hintClassName}>
      <div className="modal-content">
        <div className="modal-header cards">
          <h5 className="modal-title">Request a Quote</h5>
          <button
            type="button"
            className="close"
            onClick={()=>toggleModal()}
          >
            <span>×</span>
          </button>
        </div>
        <div className="modal-body">
          <form className="quote cards">
            <input type="text" className="form-control" placeholder="Full Name" name="fullname"/>
            <input type="text" className="form-control" placeholder="Email" name="email"/>
            <div className="form-control__holder">
              <input type="text" className="form-control" placeholder="Date" name="date"/>
            </div>
            <div className="form-control__holder">
              <input type="text" className="form-control" placeholder="Website" name="website"/>
            </div>
            <textarea className="form-control textarea" placeholder="Message" name="message" id="" cols={30} rows={10}></textarea>
            <Button
              classNames="btn_full btn_md btn_border"
              label="Get a Quote"
              handleClick={handleClickForm}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;