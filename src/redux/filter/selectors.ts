import { RootState } from '../store';

export const selectFilterData = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;
