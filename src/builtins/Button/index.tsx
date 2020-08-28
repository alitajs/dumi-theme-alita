import React, { FC } from 'react';
import classnames from 'classnames';
import './index.less';

interface ButtonProps {
  href: string;
  round?: boolean;
}

const Button: FC<ButtonProps> = ({ children, href, round = false }) => {
  if (typeof href === 'string') {
    return (
      <a
        href={href}
        className={classnames({
          'dumi-alita-button-a': true,
          'dumi-alita-button-round': round,
        })}
      >
        {children}
      </a>
    );
  }

  return (
    <div
      className={classnames({
        'dumi-alita-button': true,
        'dumi-alita-button-round': round,
      })}
    >
      {children}
    </div>
  );
};

export default Button;
