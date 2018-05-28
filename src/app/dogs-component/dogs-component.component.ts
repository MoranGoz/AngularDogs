import { Component, OnInit } from '@angular/core';

const DOGS =  [
  {name: 'Rex', weight: 20, birthday: new Date(2006, 2, 21), owner: 'Jack Daniels'},
  {name: 'Woof', weight: 8, birthday: new Date(2011, 8, 12), owner: 'Mike Perry'},
  {name: 'Chuck', weight: 28, birthday: new Date(2015, 5, 6), owner: 'Sarah Abrahamson'},
  {name: 'Barkley', weight: 4, birthday: new Date(2012, 3, 15), owner: 'Lara Croft'},
  {name: 'Prince', weight: 65, birthday: new Date(2017, 5, 4), owner: 'Jerry Seinfeld'}
];

@Component({
  selector: 'app-dogs-component',
  templateUrl: './dogs-component.component.html',
  styleUrls: ['./dogs-component.component.scss']
})
export class DogsComponentComponent implements OnInit {
  dogs = DOGS;
  toggle = true;
  constructor() { }

  removeDog(index) {
    this.dogs.splice(index, 1);
  }

  ngOnInit() {
  }
  format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle;  }


   
}




