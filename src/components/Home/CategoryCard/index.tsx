import Link from 'next/link';
import React, { FC } from 'react';
import {
  FaComment,
  FaMoneyBill,
  FaMoneyCheck,
  FaPen,
  FaSmile,
} from 'react-icons/fa';

interface Props {
  item: { id: number; name: string };
}

const CategoryCard: FC<Props> = ({ item }) => {
  const CategoryIcon: FC = () => {
    return (
      <>
        {item.id === 1 && <FaSmile size={32} />}
        {item.id === 11 && <FaMoneyBill size={32} />}
        {item.id === 12 && <FaPen size={32} />}
        {item.id === 19 && <FaComment size={32} />}
        {item.id === 21 && <FaMoneyCheck size={32} />}
      </>
    );
  };

  return (
    <>
      <Link href={`/category?id=${item.id}`}>
        <a className="transition-all duration-500 px-4 py-6 bg-violet-400 hover:bg-violet-500 font-semibold rounded text-white hover:text-slate-50 flex flex-col items-center justify-center w-[200px] h-full text-center">
          <span className="h-1/2">
            <CategoryIcon />
          </span>
          <span className="h-1/2">{item.name}</span>
        </a>
      </Link>
      <div className="transition-all duration-500 mt-2 h-[4px] w-0 group-hover:w-full bg-violet-400"></div>
    </>
  );
};

export default CategoryCard;
