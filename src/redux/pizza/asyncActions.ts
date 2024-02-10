import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchPizzasArgs, Pizza } from './types';

export const fetchPizzas = createAsyncThunk<Pizza[], fetchPizzasArgs>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { search, currentPage, categoryId, sortBy } = params;

    const { data } = await axios.get<Pizza[]>(
      `https://6589738a324d41715258fc04.mockapi.io/items?page=${currentPage}&limit=8&${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortBy}&order=desc${search}`,
    );

    return data;
  },
);
