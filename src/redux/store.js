import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
/* import - rootReducer */
import rootReducer from './rootReducer';

const middlewares = [];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

export const persistor = persistStore(store);
