import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 
  animations:[
    trigger('goals', [
      transition('* => *', [//'when any state goes to any state, trigger'
        query(':enter', style({ opacity: 0 }), {optional: true}),//when anything enters the DOM
        //sometimes will fail without optional:true
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}), //offset=starting position, translateY=start from top
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1})
          ])) ]), { optional: true }),
        query(':leave', stagger('300ms', [//when anything leaves the DOM
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}), //offset=starting position, translateY=start from top
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1})
          ])) ]), { optional: true })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an item';
  goalText: string = 'My first life goal';
  goals:string[] = ['value 1', 'value 2', 'value 3'];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }
  
  addItem(){
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }
  
  removeItem(i){
    this.goals.splice(i, 1);
  }

}
