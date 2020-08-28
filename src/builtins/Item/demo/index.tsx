import React, { FC } from 'react';
import { Item } from 'dumi-theme-alita';
import { Space } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import 'antd/es/space/style/css';

const Page = () => {
  return (
    <Space>
      <Item>无外链</Item>
      <Item href="https://alitajs.com/">外部链接</Item>
      <Item href="https://alitajs.com/" header="测试">
        带header外部链接
      </Item>
      <Item href="https://alitajs.com/" ionicon={<PlayCircleOutlined />}>
        带图标外部链接
      </Item>

      <Item
        header="Identity Vault"
        href="/enterprise/identity-vault"
        icon="/icons/logo-identity-vault.png"
        rounded="false"
      ></Item>
    </Space>
  );
};

export default Page;
