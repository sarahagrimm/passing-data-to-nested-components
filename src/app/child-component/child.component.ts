import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'child',
  template: '<h2>{{title}}</h2>',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() title: string;

  
  constructor() { }

  ngOnInit() {
}
}
