import { Layout } from 'antd';
import React, { FC } from 'react';

const Footer: FC = () => {
  const { Footer } = Layout;

  return (
    <Footer className="px-4 pb-4 pt-20 bg-violet-50 border-t inset-x-0">
      <div className="max-w-[1080px] mx-auto">Footer</div>
    </Footer>
  );
};

export default Footer;
