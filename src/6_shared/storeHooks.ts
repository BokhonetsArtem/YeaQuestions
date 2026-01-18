import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import type { RootState, AppDispatch } from "@/1_app/appStore";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
