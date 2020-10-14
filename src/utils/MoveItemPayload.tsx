import { SelectionItems } from "./SelectionItems";

export interface MoveItemPayload  {
  source_index: number,
  destination_index: number,
  item: SelectionItems
}