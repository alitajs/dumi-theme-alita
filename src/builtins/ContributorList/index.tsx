import React, { FC } from 'react';
import './index.less';

interface ContributorListProps {
  contributors: string[];
  link?: (contributor: string) => string;
}

const ContributorList: FC<ContributorListProps> = ({
  contributors = [],
  link = contributor => `https://github.com/${contributor}`,
}) => {
  if (contributors.length === 0) return null;
  return (
    <ul className="dumi-alita-contributor-list">
      {contributors.map((contributor, index) => (
        <li
          key={`${contributor}-${index}`}
          className="dumi-alita-contributor-list-li"
        >
          <a target="_blank" href={`${link(contributor)}`}>
            <img
              src={`https://github.com/${contributor}.png?size=90`}
              title={contributor}
              loading="lazy"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContributorList;
