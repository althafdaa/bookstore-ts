import React, { FC } from 'react';
import Footer from '../Footer';
import Header from '../Header';

type Props = {
  children: React.ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className="max-w-[1080px] mx-auto">
      <Header />
      {/* FILLER */}
      <div className="h-[97px]"></div>
      {children}

      <Footer />
    </div>
  );
};

export default MainLayout;
