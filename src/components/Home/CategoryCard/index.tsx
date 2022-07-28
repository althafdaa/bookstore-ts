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
  return (
    <>
      <Link href={`/books/category/${item.id}`}>
        <a className="transition-all duration-500 px-4 py-6 bg-violet-400 hover:bg-violet-500 font-semibold rounded text-white hover:text-slate-50 flex flex-col items-center justify-center w-[200px] h-full text-center">
          <span className="h-1/2">
            {item.id === 1 && (
              <div className="p-3 rounded-lg bg-violet-700">
                {' '}
                <FaSmile size={32} />
              </div>
            )}
            {item.id === 11 && (
              <div className="p-3 rounded-lg bg-violet-700">
                <FaMoneyBill size={32} />
              </div>
            )}
            {item.id === 12 && (
              <div className="p-3 rounded-lg bg-violet-700">
                <FaPen size={32} />
              </div>
            )}
            {item.id === 19 && (
              <div className="p-3 rounded-lg bg-violet-700">
                <FaComment size={32} />
              </div>
            )}
            {item.id === 21 && (
              <div className="p-3 rounded-lg bg-violet-700">
                <FaMoneyCheck size={32} />
              </div>
            )}
          </span>
          <span className="h-1/2">{item.name}</span>
        </a>
      </Link>
      <div className="transition-all duration-500 mt-2 h-[4px] w-0 group-hover:w-full bg-violet-400"></div>
    </>
  );
};

export default CategoryCard;
