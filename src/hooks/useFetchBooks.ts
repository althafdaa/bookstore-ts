import axios from 'axios';
import useSWR from 'swr';

interface BooksParams {
  categoryId: number;
  page: number;
  size: number;
}

export const useFetchBooks = () => {
  const q: BooksParams = {
    categoryId: 1,
    page: 1,
    size: 4,
  };

  const params: string = new URLSearchParams(q).toString();

  const key = `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?${params}`;
  const fetcher = async (key: string): Promise<any> => {
    try {
      const data = axios.get(key);

      return data;
    } catch (error) {
      throw new Error();
    }
  };

  const response = useSWR(key, fetcher);

  const { data, error } = response;

  return { data, error };
};
