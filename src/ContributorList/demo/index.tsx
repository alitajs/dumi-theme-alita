import React from 'react';
import { ContributorList } from 'dumi-theme-alita';

const contributors = ['xiaohuoni', 'hang1017', 'HuoXiaoYe', 'QC-L'];

const href = (contributor: string) => `https://github.com/${contributor}`;

export default () => (
  <ContributorList contributors={contributors} link={href} />
);
