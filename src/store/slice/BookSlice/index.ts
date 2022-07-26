import { createSlice } from '@reduxjs/toolkit';

export interface Books {
  books: object[];
}

const initialState: Books = {
  books: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    storeBooks: (state, action) => {
      console.log('books', state.books);
      console.log('action', action);
    },
  },
});

export const { storeBooks } = bookSlice.actions;

export default bookSlice.reducer;
