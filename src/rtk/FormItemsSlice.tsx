import { createSlice } from "@reduxjs/toolkit";
import { ItemTypes } from "../utils/Items";

interface SelectionItems {
  id: string,
  title: string,
}

interface FormItemsState {
  is_ready: boolean,
  selection: Array<SelectionItems>,
  items_dropped: Array<any>
}

const initialState: FormItemsState = {
  is_ready: true,
  selection: [
    {
      id: ItemTypes.SHORT_TEXT,
      title: "Short Text",
    },
    {
      id: ItemTypes.LONG_TEXT,
      title: "Long Text",
    },
    {
      id: ItemTypes.DATE_PICKER,
      title: "Date Picker",
    }
  ],
  items_dropped: []
}

export const FormItemsSlice = createSlice({
  name: 'FormItems',
  initialState,
  reducers: {
    copyItem(state, action){
      
    },
    moveItem(state, action){

    },
    removeItem(state, action){
      
    }
  }
})