import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ButtonGroupItem } from '../../model/button-group-item';
import { Preconditions } from '../../model/preconditions';

@Component({
  selector: 'xby2-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {
  @Input() buttonGroupItems: ButtonGroupItem[];
  @Input() isVertical: boolean;
  @Output() registerClick = new EventEmitter();

  activeItem: string;

  constructor() {}

  ngOnInit() {
    Preconditions.IsNotUndefinedOrNull(
      'buttonGroupItems',
      this.buttonGroupItems
    );
    Preconditions.IsArrayNotEmpty('buttonGroupItems', this.buttonGroupItems);

    this.activeItem = this.buttonGroupItems[0].id;
  }

  handleClick(item: string) {
    this.activeItem = item;
    this.registerClick.emit(item);
  }
}
