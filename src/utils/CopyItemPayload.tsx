import { SelectionItems } from "./SelectionItems";

export interface CopyItemPayload  {
  source_index: number,
  destination_index: number,
  item: SelectionItems
}