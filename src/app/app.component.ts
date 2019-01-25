import { Component } from '@angular/core';
import { Goal } from './goal';

@Component({
  selector: 'app-root',
  template: '<app-goal></app-goal>'
})
export class AppComponent {
  goals = [
    new Goal(1,'Watch Finding Nemo','Find an online version and watch merlin find his son',new Date(2028,3,14)),
    new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2028,3,14)),
    new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2028,3,14)),
    new Goal(4,'Get Dog Food','Pupper likes expensive sanks',new Date(2028,3,14)),
    new Goal(5,'Solve math homework','Damn Math',new Date(2028,3,14)),
    new Goal(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2028,3,14)),
  ]       
  }

