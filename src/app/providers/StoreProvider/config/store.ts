import { configureStore } from '@reduxjs/toolkit';
import { appStateReducer } from 'entities/AppState';
import { logReducer } from 'entities/Log/';
import { requestsReducer } from 'features/MasterRequests';
import { masterSettingsReducer } from 'features/MasterSettings';
import { portReducer } from 'features/PortSettings';

const extraArg = {};

export const store = configureStore({
  reducer: {
    port: portReducer,
    log: logReducer,
    appState: appStateReducer,
    requests: requestsReducer,
    masterSettings: masterSettingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
      serializableCheck: false,
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
