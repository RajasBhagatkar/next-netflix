import useSwr from 'swr'
import fetcher from '@/libs/fetcher';
import axios from '@/pages/api/axios/axios';
import { useState } from 'react';

const useBillboard = async() => {
  const [data, setData] = useState({});
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  try {
    const response = await axios('/api/random');
    setIsLoading(false);
    setData(response.data)
  } catch (error) {
    console.log(error)
    setError(error);
  }

  return {
    data,
    error,
    isLoading
  }
};

export default useBillboard;
