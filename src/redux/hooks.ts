import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const dispatch: () => AppDispatch = useDispatch
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector