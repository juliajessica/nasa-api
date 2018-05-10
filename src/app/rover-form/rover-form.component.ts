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
  photos: any[]=null;

  constructor(private marsRoverPhotos: MarsRoverApiService) { }
  getRoverImages(date: string, camera: string){
    this.marsRoverPhotos.getByDateAndCamera(date, camera).subscribe(response => { //getByDateAndCamera this method is grabbing the info from the api
      this.photos = response.json(); //returning the marsRoverPhotos and naming it photos
    });
  }
}
