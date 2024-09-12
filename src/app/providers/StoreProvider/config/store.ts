import { Reducer, configureStore } from '@reduxjs/toolkit';
import { PortState, portReducer } from 'features/PortSettings';

const extraArg = {};

export const store = configureStore({
  reducer: {
    port: portReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }),
});

export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch'];

export interface ThunkConfig {
  dispatch: AppDispatch;
  extra: {};
  state: RootState;
}
