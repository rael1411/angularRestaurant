import { Injectable } from '@angular/core';
import { Item } from "./item";
import { ITEMS } from "./mock-menu"

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {
  getItems(): Item[] {
    return ITEMS;
  }

  constructor() { }
}
