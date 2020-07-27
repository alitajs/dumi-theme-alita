import React, { FC } from 'react';
import './index.less';

interface ButtonProps {
  href: string;
}

const Button: FC<ButtonProps> = ({ children, href }) => {
  const btnContent = () => {
    if (typeof href === 'string') {
      return (
        <a href={href} className="dumi-alita-button-a">
          {children}
        </a>
      );
    } else {
      return <button className="dumi-alita-button-btn">{children}</button>;
    }
  };

  return <div className="dumi-alita-button">{btnContent()}</div>;
};

export default Button;
