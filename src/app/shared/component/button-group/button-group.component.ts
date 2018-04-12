import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ButtonGroupItem } from '../../model/button-group-item';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {
  @Input() buttonGroupItems: ButtonGroupItem[];
  @Output() registerClick = new EventEmitter();

  activeItem: string;

  constructor() { }

  ngOnInit() {
    if (this.buttonGroupItems == null) {
      throw new Error('\'buttonGroupItems\' attribute required.');
    }

    this.activeItem = this.buttonGroupItems[0].id;
  }

  handleClick(item: string) {
    this.activeItem = item;
    this.registerClick.emit(item);
  }
}
