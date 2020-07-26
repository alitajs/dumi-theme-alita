import React from 'react';
import { Card, Cards } from 'dumi-theme-alita';
import { Divider } from 'antd';
import 'antd/es/divider/style/css';
import FeatureguideImg from '../assets/feature-guide-components-icon.png';
import GuideInstallationIcon from '../assets/guide-installation-icon.png';
import GuideIntroductionIcon from '../assets/guide-introduction-icon.png';

const Page = () => {
  return (
    <div>
      <Cards>
        <Card href="/components/device" header="业务组件" img={FeatureguideImg}>
          <p>你在业务开发中遇到的全部需求，应该都能在这里找到</p>
        </Card>
        <Card
          href="/components/device"
          header="简介"
          icon={GuideIntroductionIcon}
        >
          <p>了解 Alita 开发所需要的基础知识</p>
        </Card>
        <Card
          href="/components/device"
          header="安装"
          icon={GuideInstallationIcon}
        >
          <p>你在业务开发中遇到的全部需求，应该都能在这里找到</p>
        </Card>
        <Card
          href="/components/device"
          header="原生能力"
          icon={GuideIntroductionIcon}
        >
          <p>
            集成并使用设备的原生能力，快速对接 cordova
            插件，例如蓝牙，地图，HealthKit等.
          </p>
        </Card>
        <Card
          href="/components/device"
          header="常见问题"
          icon={GuideIntroductionIcon}
        >
          <p>你在业务开发中遇到的全部需求，应该都能在这里找到</p>
        </Card>
      </Cards>
      <Divider />
      <Card
        header="Native solutions "
        iconset={[GuideIntroductionIcon, GuideInstallationIcon]}
        size="lg"
        href="https://alitajs.com/"
      />
    </div>
  );
};

export default Page;
