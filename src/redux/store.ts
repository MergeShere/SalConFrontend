// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import searchReducer from './features/searchSlice';
import serviceSelectionReducer from './features/serviceSelectionSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';



export const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer,
    selection: serviceSelectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch =()=>useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;