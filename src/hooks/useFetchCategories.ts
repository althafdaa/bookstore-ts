import axios from 'axios';
import useSWR from 'swr';

export const useFetchCategories = () => {
  const key = `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories`;
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
