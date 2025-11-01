
import { configureStore } from '@reduxjs/toolkit';
import clientsReducer from './slice/clientsSlice/clientsSlice';
import tradeLogsReducer from './slice/tradeLogsSlice/tradeLogsSlice';
import ordersReducer from './slice/ordersSlice/ordersSlice';
import uiReducer from './slice/uiSlice/uiSlice';

export const store = configureStore({
  reducer: {
    clients: clientsReducer,
    tradeLogs: tradeLogsReducer,
    orders: ordersReducer,
    ui: uiReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
