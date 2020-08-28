import React, { SFC } from 'react';
import './index.less';

const Outbound: SFC = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z" />
  </svg>
);

const fixCls = (fix: string) => `dumi-alita-${fix}`;

interface ItemProps {
  href?: string;
  header?: string;
  icon?: string;
  ionicon?: React.ElementType;
  rounded: boolean;
}

const Item: SFC<ItemProps> = ({
  children,
  href,
  header,
  icon,
  ionicon,
  rounded = false,
}) => {
  const isStatic = !href;
  const isOutbound = href && /^http/.test(href);

  const headerContent = !header ? null : (
    <header className={fixCls('root-item-header')}>
      {header} {isOutbound ? <Outbound /> : null}
    </header>
  );

  const content = [];
  if (icon) {
    content.push(<img src={icon} className={fixCls('root-item-icon')} />);
  }
  content.push(
    <div className={fixCls('root-item-container')}>
      {ionicon && <div className={fixCls('root-item-ionicon')}>{ionicon}</div>}
      {headerContent}
      <div className={fixCls('root-item-content')}>{children}</div>
    </div>,
  );

  if (isStatic) {
    return <div className={fixCls('root')}>{children}</div>;
  }

  if (isOutbound) {
    return (
      <div className={fixCls('root')}>
        <a className={fixCls('root-item')} href={href}>
          {content}
        </a>
      </div>
    );
  }

  return (
    <div className={fixCls('root')}>
      <a href="href" className={fixCls('root-item')}>
        {content}
      </a>
    </div>
  );
};

export default Item;
