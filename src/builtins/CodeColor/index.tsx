import React, { FC } from 'react';
import './index.less';

interface CodeColorProps {
  color: string;
  value?: string;
}

const CodeColor: FC<CodeColorProps> = ({ color, value }) => {
  const display = value?.trim() || color.trim();

  return (
    <span className="dumi-alita-code-color">
      <span
        className="dumi-alita-code-color-block"
        style={{
          backgroundColor: color,
        }}
      />
      <code className="dumi-alita-code-color-value">{display}</code>
    </span>
  );
};

export default CodeColor;
