import { combineReducers } from "redux";
import { FormItemsSlice } from "./FormItemsSlice";

const RootReducer = combineReducers({
  form_items: FormItemsSlice.reducer
});

export type RootState = ReturnType<typeof RootReducer>
export default RootReducer;