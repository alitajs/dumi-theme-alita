import React, { FC } from 'react';
import { Button } from 'dumi-theme-alita';
import { Space } from 'antd';
import 'antd/es/space/style/css';

const Page = () => {
  return (
    <Space>
      <Button href="https://alitajs.com/">外部链接按钮</Button>
      <Button href="/components/card">内部跳转按钮</Button>
      <Button round>round</Button>
    </Space>
  );
};

export default Page;
