import { configureStore } from '@reduxjs/toolkit';
import BookSlice from './slice/BookSlice';

export interface ReducerType {
  books: {
    books: [];
    category: [];
  };
}

export const store = configureStore({
  reducer: {
    books: BookSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
