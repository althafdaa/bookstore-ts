/* eslint-disable @next/next/no-img-element */
import { Form, Input, Select } from 'antd';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { BookType, CategoryType } from '..';
import { useFetchBooks } from '../../hooks/useFetchBooks';
import { ReducerType } from '../../store';
import Photo from '../../assets/images/photo.jpg';

interface Props {
  categoryId: number;
}

const CategoryPage: NextPage<Props> = () => {
  const [form] = Form.useForm();
  const categories = useSelector((state: ReducerType) => state.books.category);

  const { data: books } = useFetchBooks({
    categoryId: 1,
    page: 1,
    size: 10,
  });

  //   console.log(books?.data);

  return (
    <main className="mt-20">
      <Form form={form}>
        <Input />
        <Select className="w-[200px] bg-green-600">
          {categories.map((item: CategoryType, idx: number) => {
            return (
              <Select.Option key={`${item.name}-${idx}`}>
                {item.name}
              </Select.Option>
            );
          })}
        </Select>
      </Form>

      <div className="grid grid-cols-4">
        {books?.data?.map((item: BookType, idx: number) => {
          return (
            <Link href={`/books/${item.id}`} key={`${item.title}-${idx}`}>
              <a
                className="group w-[250px] min-h-[250px] border rounded-xl shadow pb-4 relative"
                key={`${item.title}-${idx}`}
              >
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
      </div>
    </main>
  );
};

export default CategoryPage;
