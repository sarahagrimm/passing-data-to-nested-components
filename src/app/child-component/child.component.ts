import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  template: `
  <h2>{{title}}</h2>
  <button type="button" (click)="notifyParent()">click me!</button>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() title: string;
  @Output() parentNotified = new EventEmitter<string>();

  
  constructor() { }

  ngOnInit() {
}

  notifyParent() {
    this.parentNotified.emit(this.title);
  }
}
