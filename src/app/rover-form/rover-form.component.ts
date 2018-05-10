import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MarsRoverApiService } from '../mars-rover-api.service'

@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: ['./rover-form.component.css'],
  providers: [ MarsRoverApiService ]
})
export class RoverFormComponent {
  photos: any[];
  noPhotos: boolean=false;

  constructor(private marsRoverPhotos: MarsRoverApiService) { }
  getRoverImages(date: string, camera: string){
    this.photos = null;
    this.marsRoverPhotos.getByDateAndCamera(date, camera).subscribe(response => {
      if(response.json().photos.length > 0){
        this.photos = response.json(); //returning the marsRoverPhotos and naming it photos
      } //getByDateAndCamera this method is grabbing the info from the api
    });
  }
}
