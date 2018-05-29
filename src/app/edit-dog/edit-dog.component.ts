import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Dog } from '../dog';
//route
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-edit-dog',
  templateUrl: './edit-dog.component.html',
  styleUrls: ['./edit-dog.component.scss'] 
})
export class EditDogComponent implements OnInit {

dog:Dog;
constructor(private dogsService: DogsService, private route: ActivatedRoute) { 
  
}

  ngOnInit() {
    console.log('edit')      

    this.route.params.subscribe(params => {
      console.log("the id parameter is: " + params.id);
      this.dog = this.dogsService.getDog(params.id);
    });

   
  }

  EditDog(){
      this.route.params.subscribe(params => {
      console.log("Edittttt " + params.id);
      this.dogsService.UpdateDog(this.dog,params.id);
    });
  }

}



