import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output()
  public comp3Var = new EventEmitter();
  comp3(value){
    this.comp3Var.emit(value);
  }

}
