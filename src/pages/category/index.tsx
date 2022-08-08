/* eslint-disable @next/next/no-img-element */
import { Form, Input, Select } from 'antd';
import { NextPage } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BookType, CategoryType } from '..';
import { useFetchBooks } from '../../hooks/useFetchBooks';
import { ReducerType } from '../../store';
import Photo from '../../assets/images/photo.jpg';
import { useRouter } from 'next/router';

interface Props {
  categoryId: number;
}

const CategoryPage: NextPage<Props> = () => {
  const [form] = Form.useForm();
  const categories = useSelector((state: ReducerType) => state.books.category);
  const router = useRouter();
  const id = Number(router.query.id);
  const [categoryId, setCategoryId] = useState(id ?? 1);

  const addQueryParam = (key: string, value: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url.toString());
  };

  const { data: books } = useFetchBooks({
    categoryId: categoryId,
    page: 1,
    size: 8,
  });

  const [filteredBooks, setFilteredBooks] = useState(books?.data ?? []);

  const onSearch = (value: string) => {
    if (value === '') return setFilteredBooks(books?.data);

    const filterBooks = books?.data?.filter((book: BookType) => {
      return book.title.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    });

    setFilteredBooks(filterBooks);
  };

  const BooksNotFound = filteredBooks?.length === 0;
  const BooksExist = filteredBooks?.length > 0;

  return (
    <main className="mt-20">
      <Form form={form} className="flex gap-4">
        <Select
          className="w-[300px]"
          defaultValue={categoryId}
          onChange={(e) => {
            const val = Number(e);
            setCategoryId(val);
            addQueryParam('id', e.toString());
          }}
        >
          {categories.map((item: CategoryType, idx: number) => {
            return (
              <Select.Option value={item.id} key={`${item.name}-${idx}`}>
                {item.name}
              </Select.Option>
            );
          })}
        </Select>
        <Input onChange={(e) => onSearch(e.target.value)} />
      </Form>

      <div className="grid grid-cols-4 mt-4 gap-4">
        {BooksExist &&
          filteredBooks.map((item: BookType, idx: number) => {
            return (
              <Link href={`/books/${item.id}`} key={`${item.title}-${idx}`}>
                <a
                  className="group w-[250px] min-h-[400px] border rounded-xl shadow pb-4 relative"
                  key={`${item.title}-${idx}`}
                >
                  <div
                    className="transition duration-500 w-full h-[80%] rounded-t-xl bg-center bg-cover group-hover:scale-[1.01] shadow-md"
                    style={{ backgroundImage: `url(${item.cover_url})` }}
                  ></div>

                  <div className="h-[60px] w-[60px] absolute left-[37%] top-[65%] bg-white rounded-full flex items-center justify-center">
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
                        return (
                          <span key={idx} className="text-[10px]">
                            {item}
                          </span>
                        );
                      }
                    })}
                  </div>
                </a>
              </Link>
            );
          })}

        {BooksNotFound && <div>Books not found</div>}
      </div>
    </main>
  );
};

export default CategoryPage;
