import { Form, Input, Select } from 'antd';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store';

const CategoryPage: NextPage = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const categories = useSelector((state: ReducerType) => state.books.category);

  console.log(categories);

  return (
    <main className="mt-20">
      <Form form={form}>
        <Input />
        <Select className="w-[200px] bg-green-600">
          {categories.map((item, idx) => {
            return <div key={idx}>{item.name}</div>;
          })}
        </Select>
      </Form>
    </main>
  );
};

export default CategoryPage;
