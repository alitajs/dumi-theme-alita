import React, { useState, FC } from 'react';
import Popover from 'antd/es/popover';
import QRCode from 'qrcode.react';
import ScanImg from './scan.png';
import ZH_CN from './locale/zh_CN';
import 'antd/es/popover/style/index';
import './index.less';

// 先用qrcode.react，担心大小太大了，可能的话，自己实现
// https://github.com/davidshimjs/qrcodejs
interface DeviceProps {
  url: string;
  source: string;
  language?: string;
}
interface DeviceLocale {
  view_source: string;
}
const getLocale = (language: string) => {
  const locales: { [key: string]: DeviceLocale } = {
    'zh-cn': ZH_CN
  }
  // 把key转成全小写的
  return locales[language.toLowerCase()];
}
const Device: FC<DeviceProps> = ({ url, source, language = 'zh-cn' }) => {
  const locale = getLocale(language);
  const content = <QRCode value={url} size={258} />
  return (
    <>
      <div className={`dumi-alita-device ios`}>
        <figure>
          <svg className="dumi-alita-device__md-bar" viewBox="0 0 1384.3 40.3">
            <path className="st0" d="M1343 5l18.8 32.3c.8 1.3 2.7 1.3 3.5 0L1384 5c.8-1.3-.2-3-1.7-3h-37.6c-1.5 0-2.5 1.7-1.7 3z" />
            <circle className="st0" cx="1299" cy="20.2" r="20" />
            <path className="st0" d="M1213 1.2h30c2.2 0 4 1.8 4 4v30c0 2.2-1.8 4-4 4h-30c-2.2 0-4-1.8-4-4v-30c0-2.3 1.8-4 4-4zM16 4.2h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
          </svg>
          <iframe
            src={url}
          />
        </figure>
        <a href={source}
          className="dumi-alita-source"
          target="_blank"
          title="Demo Source"
        >
          <Popover content={content} trigger="hover">
            <img src={ScanImg} />
          </Popover>
          {locale.view_source}
        </a>
      </div>

    </>
  );
};

export default Device;
