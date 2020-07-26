import React from 'react';
import { Card } from 'dumi-theme-alita';
import { Space, Divider } from 'antd';
import 'antd/es/space/style/css';
import 'antd/es/divider/style/css';
import FeatureguideImg from '../assets/feature-guide-components-icon.png';
import GuideInstallationIcon from '../assets/guide-installation-icon.png';
import GuideIntroductionIcon from '../assets/guide-introduction-icon.png';

const Page = () => {
  return (
    <div>
      <Space align="start">
        <div style={{ width: 300 }}>
          <Card
            href="/components/device"
            header="业务组件"
            img={FeatureguideImg}
          >
            <p>你在业务开发中遇到的全部需求，应该都能在这里找到</p>
          </Card>
        </div>
        <Space direction="vertical">
          <div style={{ width: 300 }}>
            <Card
              href="/components/device"
              header="简介"
              icon={GuideInstallationIcon}
            >
              <p>了解 Alita 开发所需要的基础知识</p>
            </Card>
          </div>
          <div style={{ width: 300 }}>
            <Card
              href="/components/device"
              header="安装"
              icon={GuideIntroductionIcon}
            >
              <p>你在业务开发中遇到的全部需求，应该都能在这里找到</p>
            </Card>
          </div>
        </Space>
      </Space>
      <Divider />
      <Card
        header="Native solutions "
        iconset={[GuideIntroductionIcon, GuideInstallationIcon]}
        size="lg"
      />
    </div>
  );
};

export default Page;
