---
nav:
  title: 组件
  path: /components
  name: ColorAccordion
---

## Color-accordion

```tsx
import React from 'react';
import { ColorAccordion } from 'dumi-theme-alita';

const colors = [
  {
    name: 'primary',
    color: '#3880ff',
    contrast: '#fff',
    shade: '#3171e0',
    tint: '#4c8dff',
  },
  {
    name: 'secondary',
    color: '#0cd1e8',
    contrast: '#fff',
    shade: '#0bb8cc',
    tint: '#24d6ea',
  },
  {
    name: 'tertiary',
    color: '#7044ff',
    contrast: '#fff',
    shade: '#633ce0',
    tint: '#7e57ff',
  },
  {
    name: 'success',
    color: '#10dc60',
    contrast: '#fff',
    shade: '#0ec254',
    tint: '#28e070',
  },
  {
    name: 'warning',
    color: '#ffce00',
    contrast: '#fff',
    shade: '#e0b500',
    tint: '#ffd31a',
  },
  {
    name: 'danger',
    color: '#f04141',
    contrast: '#fff',
    shade: '#d33939',
    tint: '#f25454',
  },
  {
    name: 'dark',
    color: '#222428',
    contrast: '#fff',
    shade: '#1e2023',
    tint: '#383a3e',
  },
  { name: 'medium', color: '#989aa2', contrast: '#fff', shade: '#86888f' },
  {
    name: 'light',
    color: '#f4f5f8',
    contrast: '#000',
    shade: '#d7d8da',
    tint: '#f5f6f9',
  },
];

export default () => <ColorAccordion colors={colors} />;
```

## API

| 参数   | 说明   | 类型               | 默认值 |
| ------ | ------ | ------------------ | ------ |
| colors | 数据源 | `ColorItemProps[]` | -      |

### ColorItemProps

| 参数     | 说明       | 类型   | 默认值 |
| -------- | ---------- | ------ | ------ |
| name     | 颜色名称   | string | -      |
| color    | 颜色值     | string | -      |
| contrast | 文字颜色   | string | -      |
| shade    | 阴影颜色   | string | ''     |
| tint     | 浅背景颜色 | string | ''     |
