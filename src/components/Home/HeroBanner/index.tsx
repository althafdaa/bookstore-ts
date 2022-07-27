import React, { FC } from 'react';
import CharacterBanner from './CharacterBanner';

const HeroBanner: FC = () => {
  return (
    <section className="h-[calc(100vh-97px)] relative flex items-center">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center">
          <h3 className="font-medium text-violet-500">BOOKSTORE MARKET</h3>
          <h1 className="text-6xl font-semibold leading-tight">
            Read and collect your favorite digital books.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            minus ut voluptatibus qui totam numquam reiciendis nesciunt debitis
          </p>

          <button className="mt-5 px-6 py-1 bg-violet-400 rounded font-semibold text-white hover:shadow transition-all w-fit">
            Explore
          </button>
        </div>

        <CharacterBanner />
      </div>
    </section>
  );
};

export default HeroBanner;
