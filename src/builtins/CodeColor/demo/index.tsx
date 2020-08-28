import React from 'react';
import { CodeColor } from 'dumi-theme-alita';
import { Space } from 'antd';
import 'antd/es/space/style/css';

export default () => (
  <Space>
    <CodeColor color="#3880ff" value="CodeColor" />
    <CodeColor color="#0cd1e8" />
  </Space>
);
