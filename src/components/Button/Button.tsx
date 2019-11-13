import * as React from "react";
// import classnames from 'classnames';

type ButtonProps = {
  label: string;
  classNames?: string;
  btnType?: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = props => {
  const { label, handleClick } = props;
  // const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log("click");
  // };
  return (
    <button className="btn" onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
