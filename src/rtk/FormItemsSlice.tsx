import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemTypes } from "../utils/Items";
import { SelectionItems } from '../utils/SelectionItems';
import { MoveItemPayload } from "../utils/MoveItemPayload";
import { RemoveItemPayload } from "../utils/RemoveItemPayload";
import { UpdateFieldNamePayload } from "../utils/UpdateItemFieldNamePayload";
import { CopyItemPayload } from "../utils/CopyItemPayload";

interface FormItemsState {
  is_ready: boolean,
  selection: Array<SelectionItems>,
  items_dropped: Array<SelectionItems>
  form_title: string,
}

const initialState: FormItemsState = {
  is_ready: true,
  selection: [
    {
      id: ItemTypes.SHORT_TEXT,
      title: "Short Text",
      type: ItemTypes.SHORT_TEXT,
      field_name: 'Untitled field'
    },
    {
      id: ItemTypes.LONG_TEXT,
      title: "Long Text",
      type: ItemTypes.LONG_TEXT,
      field_name: 'Untitled field'

    },
    {
      id: ItemTypes.DATE_PICKER,
      title: "Date Picker",
      type: ItemTypes.DATE_PICKER,
      field_name: 'Untitled field'
    }
  ],
  items_dropped: [],
  form_title: ''
}

const FormItemsSlice = createSlice({
  name: 'FormItems',
  initialState,
  reducers: {
    copyItem(state, action: PayloadAction<CopyItemPayload>){
      let current_items = state.items_dropped;
      current_items.splice(action.payload.destination_index, 0, action.payload.item);
      state = {
        ...state,
        items_dropped: current_items
      }
    },
    moveItem(state, action: PayloadAction<MoveItemPayload>){
      let current_items = state.items_dropped;
      current_items.splice(action.payload.source_index, 1);
      current_items.splice(action.payload.destination_index, 0, action.payload.item);
      state = {
        ...state,
        items_dropped: current_items
      }
    },
    removeItem(state, action: PayloadAction<RemoveItemPayload>){
      let item_index = action.payload.index;
      let current_items = state.items_dropped;
      current_items.splice(item_index, 1);
      state = {
        ...state,
        items_dropped: current_items
      }
    },
    updateFieldName(state, action: PayloadAction<UpdateFieldNamePayload>){
      let current_items = state.items_dropped;
      let selected_item_id = current_items.findIndex((item => item.id === action.payload.id));
      let selected_item = current_items[selected_item_id];
      selected_item = {
        ...selected_item,
        field_name: action.payload.new_field_name
      }     
      console.log(JSON.stringify(selected_item))
    
      state.items_dropped[selected_item_id] = selected_item;
      console.log(JSON.stringify(state.items_dropped))
    },
    updateFormTitle(state, action: PayloadAction<string>){
      let new_form_title = action.payload;
      state.form_title = new_form_title;
    }
  }
});

export const { copyItem, moveItem, removeItem, updateFieldName, updateFormTitle } = FormItemsSlice.actions;

export default FormItemsSlice.reducer;