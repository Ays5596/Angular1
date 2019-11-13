import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  public value="";
  constructor() { }

  ngOnInit() {
  }
  @Output() public comp2Var= new EventEmitter();
  comp2(value){
    this.comp2Var.emit(value);
  }
  
}
