import React, { FC, useState } from 'react';
import classnames from 'classnames';
import { colors } from './color';
import './index.less';

const ColorAccordion: FC = () => {
  const [activeColor, setActiveColor] = useState<string>('');

  const toggleActiveColor = (color: string) => {
    if (color === activeColor) {
      setActiveColor('');
      return;
    }
    setActiveColor(color);
  };

  return (
    <div className="dumi-alita-color-accordion">
      <ul className="dumi-alita-color-menu">
        {Object.keys(colors).map(color => {
          const isActive = activeColor === color ? true : false;
          return (
            <li
              key={color}
              className={classnames({
                'dumi-alita-color-menu-item': true,
                'dumi-alita-color-menu-item-active': isActive,
              })}
              style={{
                backgroundColor: colors[color][`dumi-alita-color-${color}`],
                color: colors[color][`dumi-alita-color-${color}-contrast`],
              }}
            >
              <div
                className="dumi-alita-color-menu-text"
                onClick={() => toggleActiveColor(color)}
              >
                {color[0].toUpperCase() + color.substr(1)}
                <div className="dumi-alita-color-menu-value">
                  {colors[color][`dumi-alita-color-${color}`]}
                </div>
              </div>

              <svg
                width="10px"
                height="6px"
                viewBox="0 0 10 6"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Welcome"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    id="Desktop-HD"
                    transform="translate(-1025.000000, -335.000000)"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline
                      id="arrow"
                      transform="translate(1030.000000, 338.000000) rotate(90.000000) translate(-1030.000000, -338.000000) "
                      points="1028 334 1032 338.020022 1028 342"
                    ></polyline>
                  </g>
                </g>
              </svg>
              <ul className="dumi-alita-color-submenu">
                <li
                  className="dumi-alita-color-submenu-item"
                  style={{
                    backgroundColor:
                      colors[color][`dumi-alita-color-${color}-shade`],
                    color: colors[color][`dumi-alita-color-${color}-contrast`],
                  }}
                >
                  <div className="dumi-alita-color-menu-text">
                    Shade
                    <div className="dumi-alita-color-menu-value">
                      {colors[color][`dumi-alita-color-${color}-shade`]}
                    </div>
                  </div>
                </li>
                <li
                  className="dumi-alita-color-submenu-item"
                  style={{
                    backgroundColor:
                      colors[color][`dumi-alita-color-${color}-tint`],
                    color: colors[color][`dumi-alita-color-${color}-contrast`],
                  }}
                >
                  <div className="dumi-alita-color-menu-text">
                    Tint
                    <div className="dumi-alita-color-menu-value">
                      {colors[color][`dumi-alita-color-${color}-tint`]}
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ColorAccordion;
