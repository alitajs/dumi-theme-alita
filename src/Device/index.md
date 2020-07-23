---
nav:
  title: 组件
  path: /components
---


## Device

用于移动端组件库的预览，支持基本交互，底部支持跳转到源码地址，支持线上二维码预览。

```tsx | pre
import React from 'react';
import { Device } from 'dumi-theme-alita';

export default () => <Device url="https://mobile.ant.design/kitchen-sink/" source="https://github.com/alitajs/dumi-theme-alita/tree/master/src/Device" />;
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| url | 预览的ur链接，支持本地的开发路径 | string | - |
| source | 源码的地址，用于底部点击跳转路径 | string | - |
| language | 国际化语言包 | string | zh-cn |
