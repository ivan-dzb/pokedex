import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import pokemonSlice from "./slices/pokemonSlice";

const store = configureStore({
  reducer: { pokemonSlice },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
