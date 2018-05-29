import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// my routes
import { DogsComponent } from './dogs/dogs.component';
import { AddDogComponent } from './add-dog/add-dog.component';
import {EditDogComponent} from './edit-dog/edit-dog.component';

const routes: Routes = [
  { path: '', component: DogsComponent},
  { path: 'add-dog', component: AddDogComponent },
  { path: 'edit-dog/:id', component: EditDogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }