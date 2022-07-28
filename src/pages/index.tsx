/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import CategoryCard from '../components/Home/CategoryCard';
import HeroBanner from '../components/Home/HeroBanner';
import { useFetchBooks } from '../hooks/useFetchBooks';
import { useFetchCategories } from '../hooks/useFetchCategories';
import Photo from '../assets/images/photo.jpg';

interface Category {
  id: number;
  name: string;
}

interface Book {
  audio_length: number;
  authors: string[];
  category_id: number;
  cover_url: string;
  description: string;
  id: number;
  sections: object[];
  title: string;
}

const Home: NextPage = () => {
  const { data: categories } = useFetchCategories();
  const { data: books } = useFetchBooks();

  return (
    <>
      <Head>
        <title>Book Store</title>
        <meta name="description" content="Created by althafdaa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroBanner />

      <section className="mb-10">
        <h2 className="text-3xl font-bold text-center mb-8 pb-4 flex flex-col items-center">
          Hot Books
          <div className="h-[2px] w-[10%] bg-violet-700 mt-4"></div>
        </h2>

        <ul className="flex justify-between gap-4">
          {books?.data?.map((item: Book, idx: number) => {
            return (
              <Link href={`/books/${item.id}`} key={idx}>
                <a className="group w-[250px] min-h-[250px] border rounded-xl shadow pb-4 relative">
                  <div
                    className="transition duration-500 w-full h-[80%] rounded-t-xl bg-center bg-cover group-hover:scale-[1.01] shadow-md"
                    style={{ backgroundImage: `url(${item.cover_url})` }}
                  ></div>

                  <div className="h-[60px] w-[60px] absolute left-[37%] top-[55%] bg-white rounded-full flex items-center justify-center">
                    <img
                      className="w-full h-full rounded-full p-1"
                      src={Photo.src}
                      alt="image"
                    />
                  </div>

                  <div className="h-[20%] flex flex-col items-center justify-center mt-1">
                    <span className="font-semibold">{item.title}</span>
                    {item.authors.map((item, idx) => {
                      if (idx === 0) {
                        return <span className="text-[10px]">{item}</span>;
                      }
                    })}
                  </div>
                </a>
              </Link>
            );
          })}
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8 pb-4 flex flex-col items-center">
          Book Category
          <div className="h-[2px] w-[10%] bg-violet-700 mt-4"></div>
        </h2>

        <ul className="flex justify-between">
          {categories?.data?.map(
            (item: Category, idx: number): React.ReactNode => {
              return (
                <li className="group" key={idx}>
                  <CategoryCard item={item} />
                </li>
              );
            }
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;
