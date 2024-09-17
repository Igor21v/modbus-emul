import { configureStore } from '@reduxjs/toolkit';
import { appStateReducer } from 'entities/AppState';
import { logReducer } from 'entities/Log/';
import { portReducer } from 'features/PortSettings';

const extraArg = {};

export const store = configureStore({
  reducer: {
    port: portReducer,
    log: logReducer,
    appState: appStateReducer,
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
