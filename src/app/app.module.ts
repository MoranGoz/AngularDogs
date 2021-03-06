import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddDogComponent } from './add-dog/add-dog.component';
import { AddOwnerComponent } from './add-owner/add-owner.component';
import { DogsComponentComponent } from './dogs-component/dogs-component.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    AddDogComponent,
    AddOwnerComponent,
    DogsComponentComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
