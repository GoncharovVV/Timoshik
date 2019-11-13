import * as React from "react";
type ButtonProps = {
  label: string;
  classNames?: string;
  btnType?: string;
  handleClick: () => void;
};

const Button: React.FC<ButtonProps> = props => {
  const { label, classNames, btnType } = props;
  const handleClick: React.ReactEventHandler<HTMLButtonElement> = e => {
    console.log("click");
  };
  return (
    <button className="btn" onClick={e => handleClick(e)}>
      {label}
    </button>
  );
};

export default Button;
