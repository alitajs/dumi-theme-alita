import React, { FC } from 'react';
import './index.less';

interface ButtonProps {
  href: string;
}

const Button: FC<ButtonProps> = ({ children, href }) => {
  if (typeof href === 'string') {
    return (
      <a href={href} className="dumi-alita-button-a">
        {children}
      </a>
    );
  }

  return <div className="dumi-alita-button">{children}</div>;
};

export default Button;
