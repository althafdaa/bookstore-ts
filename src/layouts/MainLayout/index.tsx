import React, { FC } from 'react';
import Footer from '../Footer';
import Header from '../Header';

type Props = {
  children: React.ReactNode;
};

const BackgroundParticle = () => {
  return (
    <div className="transition-all delay-100 w-[1024px] h-[1024px]  bg-violet-50 hover:border hover:border-violet-200 hover:bg-violet-100 rounded-full absolute -right-[512px] -top-[512px]"></div>
  );
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className="relative overflow-x-hidden">
      <BackgroundParticle />
      <div className="max-w-[1080px] mx-auto relative">
        <Header />
        {/* FILLER */}
        <div className="h-[97px]"></div>
        {children}
      </div>
      {/* FILLER */}
      <div className="h-[121px]"></div>

      <Footer />
    </div>
  );
};

export default MainLayout;
