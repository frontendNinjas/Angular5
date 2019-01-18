import { Component, OnInit } from '@angular/core';
import{  trigger,state,style,animate,transition, animation,} from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[

  ]
})
export class HomeComponent implements OnInit {

  itemCount: number = 4;
  btnText : string = "Add Item"
  goalText : string = "My life goal is"
  goals=[]

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem(){
    this.goals.push(this.goalText);
    this.itemCount = this.goals.length;
  }

}
