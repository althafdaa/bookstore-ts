import { createSlice } from '@reduxjs/toolkit';

export interface BooksSliceType {
  books: Array<object>;
  category: Array<object>;
}

const initialState: BooksSliceType = {
  books: [],
  category: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    storeBooks: (state, action) => {
      console.log('books', state.books);
      console.log('action', action);
    },

    SET_CATEGORIES: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { storeBooks, SET_CATEGORIES } = bookSlice.actions;

export default bookSlice.reducer;
