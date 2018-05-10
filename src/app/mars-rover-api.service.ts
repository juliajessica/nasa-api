import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { marsRoverKey } from './api-key';

@Injectable()
export class MarsRoverApiService {
  constructor(private http: Http){}//private means its only accessable in this instance

  getByDateAndCamera(date: string, camera: string) {
  return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=${camera}&&api_key=${marsRoverKey}`)
}

}
