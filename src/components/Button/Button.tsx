import * as React from "react";
import classnames from 'classnames';
import './Button.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  classNames?: string;
  btnType?: 'submit' | 'reset' | 'button';
  icon?: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = props => {

  const { label, handleClick, btnType = 'button', classNames = '', icon = '' } = props;
  console.log(props.children);
  const hintClassName = classnames('btn', { [classNames]: classNames.length>0, 'btn_svg': props.children });
  let btnContent: JSX.Element;
  if (icon.length>0) {
    btnContent = <span className={`btn__icon ${icon}`}>{label}</span>
  }
  else {
    btnContent = <span>{label}</span>
  }
  return (
    <button type={btnType} className={hintClassName} onClick={handleClick}>
      {props.children}
      {btnContent}
    </button>
  );
};

export default Button;
