import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Link } from '../../../model/link';
declare var $: any;

@Component({
  selector: 'xby2-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() links: Link[];
  @Input() isVisible: boolean;
  @Output() clickCloseButton = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClickCloseButton() {
    this.clickCloseButton.emit();
  }
}
