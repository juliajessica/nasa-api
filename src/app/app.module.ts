import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { RoverFormComponent } from './rover-form/rover-form.component';
import { PhotoListComponent } from './photo-list/photo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RoverFormComponent,
    PhotoListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
