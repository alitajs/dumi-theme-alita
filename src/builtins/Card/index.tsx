import React, { useState, FC, useEffect } from 'react';
import classnames from 'classnames';
import './index.less';

interface CardProps {
  header?: string | React.ReactNode;
  href: string;
  img?: string;
  icon?: string;
  iconset?: string[];
  size?: 'md' | 'lg';
}

let i = 0;

const Card: FC<CardProps> = props => {
  const { children, header, href, img, icon, iconset, size } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  let interval: NodeJS.Timeout | null = null;

  const isStatic = !href;
  const isOutbound = /^http/.test(href);

  const cardClass = classnames({
    'dumi-alita-card-with-image': !!img,
    'dumi-alita-card-without-image': !img,
    'dumi-alita-card': true,
    'dumi-alita-card-hover': true,
  });

  const tic = () => {
    if (!iconset) return;
    if (i >= iconset.length - 1) {
      setActiveIndex(0);
      i = 0;
      return;
    }
    setActiveIndex(activeIndex + 1);
    i++;
  };

  useEffect(() => {
    if (!iconset) return;
    setActiveIndex(0);
    i = 0;
    const rotationTime = 4000 + Math.random() * 2000;
    interval = setInterval(() => {
      tic();
    }, rotationTime);

    return () => {
      if (interval && iconset) clearInterval(interval);
    };
  }, []);

  const headerContent = () => {
    return <header className="dumi-alita-card-header">{header}</header>;
  };

  const content = () => {
    return (
      <div
        className={classnames({
          'dumi-alita-card-size-lg': size === 'lg',
        })}
      >
        {img && <img src={img} className="dumi-alita-card-image" />}
        <div
          className={classnames({
            'dumi-alita-card-container': true,
          })}
        >
          {icon && <img src={icon} className="dumi-alita-card-icon" />}
          {iconset && (
            <div className="dumi-alita-card-iconset-container">
              {iconset.map((icon, index) => (
                <img
                  key={`iconset-${index}`}
                  src={icon}
                  className={`dumi-alita-card-iconset ${
                    index === activeIndex
                      ? 'dumi-alita-card-iconset-active'
                      : ''
                  }`}
                  data-index={index}
                />
              ))}
            </div>
          )}
          {header && headerContent()}
          <div className="dumi-alita-card-content">{children}</div>
        </div>
      </div>
    );
  };

  if (isStatic) {
    return <div className={cardClass}>{content()}</div>;
  }

  if (isOutbound) {
    return (
      <a className={cardClass} href={href}>
        {content()}
      </a>
    );
  }

  return (
    <a className={cardClass} href={href}>
      {content()}
    </a>
  );
};

export default Card;
