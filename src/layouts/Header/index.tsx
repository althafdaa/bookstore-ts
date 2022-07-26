import { Layout } from 'antd';
import Link from 'next/link';
import React, { FC } from 'react';
import { FaBookOpen } from 'react-icons/fa';

type NavbarItem = {
  label: string;
  path: string;
};

const Navigation: NavbarItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Bookmark', path: '/bookmark' },
];

const Header: FC = () => {
  const { Header } = Layout;
  return (
    <Header className="py-8 border-b rounded-b-sm fixed top-0 inset-x-0">
      <nav className="flex items-center justify-between gap-4 px-4 max-w-[1080px] m-auto">
        <Link href={'/'}>
          <a>
            <FaBookOpen size={24} fill={'rgb(167 139 250)'} />
          </a>
        </Link>

        <div className="flex gap-2 items-center">
          {Navigation.map((item, idx) => {
            return (
              <Link href={item.path} key={idx}>
                <a className="group transition-all font-medium hover:text-violet-400 relative">
                  {item.label}

                  <div className="transition-all delay-100 h-[1px] w-0 group-hover:w-full bg-violet-400"></div>
                </a>
              </Link>
            );
          })}

          <Link href={'/login'}>
            <a className="px-8 py-1 bg-violet-400 text-slate-50 font-medium rounded hover:shadow-lg transition-all">
              Login
            </a>
          </Link>
        </div>
      </nav>
    </Header>
  );
};

export default Header;
