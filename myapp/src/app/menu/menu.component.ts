import { Component, OnInit } from '@angular/core';
import { Item } from "../item";
import { MenuItemsService } from "../menu-items.service"

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private MenuItemsService: MenuItemsService) {}
  items: Item[];
  getItems(): void {
    this.items = this.MenuItemsService.getItems();
  }
  ngOnInit() {
    this.getItems();
  }
}
