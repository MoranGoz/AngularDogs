import { Component, OnInit } from '@angular/core';
import {DogsService} from '../dogs.service'

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  dogs = [];
  dateFormat = 'fullDate'

  constructor(private dogsService: DogsService) {
    this.dogs = dogsService.getDogs();
  }

  ngOnInit() {
  }
 
  removeDog(index) {
    this.dogs.splice(index, 1);
  }

  toggleDate() {
    this.dateFormat == 'fullDate' ? this.dateFormat = 'shortDate' : this.dateFormat = 'fullDate';
  }

}