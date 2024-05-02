import useSwr from 'swr'
import fetcher from '@/libs/fetcher';
import axios from '@/pages/api/axios/axios';
import { useState } from 'react'

const useMovies = async() => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [data, setData] = useState({});
  try {
    const response = await axios('/api/movies');
    setData(response.data);
    setIsLoading(false);
  } catch (error) {
    setError(error) 
  }
  return {
    data,
    error,
    isLoading
  }
};

export default useMovies;
