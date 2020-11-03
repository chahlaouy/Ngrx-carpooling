import { Injectable } from '@angular/core';
import {  AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private rideSource: any;
  private rideDestination: any;
  private rideNumberOfSeats: any;
  private rideCost: any;
  private rideDistance: {
    text: any,
    value: any
  };
  private rideAverageDuration: {
    text: any,
    value: any
  };

  constructor(
    private db: AngularFirestore,
    private router: Router,
    private mapsAPILoader: MapsAPILoader
  ) {}

getCurrentsUserInfo(){
        
  return this.db.doc(`users/${localStorage.getItem('uid')}`).get()
 }

 addCar(car){
    return this.db.doc(`users/${localStorage.getItem('uid')}`).update({
      userCar: car
    })
  }

 addFavorite(favorite){
    return this.db.doc(`users/${localStorage.getItem('uid')}`).update({
      userFavorite: favorite
    })
  }

  setRideSource(source){
    this.rideSource = source;
  }
  setRideDestination(destination){
    this.rideDestination = destination;
    this.getDistance();
  }

  setNumberOfSeats(seats){
    this.rideNumberOfSeats = seats;
  }

  getRideDetails(){
    return {
      rideSource: this.rideSource,
      rideDestination: this.rideDestination,
      rideNumberOfSeats: this.rideNumberOfSeats,
      rideDistance: this.rideDistance,
      rideCost: this.rideCost,
      rideAverageDuration: this.rideAverageDuration
    }
  }

  getDistance() {
    this.mapsAPILoader.load().then(() => {
      let service = new google.maps.DistanceMatrixService;
      service.getDistanceMatrix({
        origins: [{ lat: this.rideSource.lat, lng: this.rideSource.lng }],
        destinations: [{ lat: this.rideDestination.lat, lng: this.rideDestination.lng }],
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
        travelMode: google.maps.TravelMode.DRIVING,
      }, (resp, status) => {
        if (status !== 'OK') {
          alert('Error was: ' + status);
        } else {
          this.rideDistance= {
            text: resp.rows[0].elements[0].distance.text,
            value: resp.rows[0].elements[0].distance.value
          }
          this.rideAverageDuration= {
            text: resp.rows[0].elements[0].duration.text,
            value: resp.rows[0].elements[0].duration.value
          }
          console.log("/////////////////////////////");
          console.log(this.rideDistance, this.rideAverageDuration);
        }
      })
    })
  }
}
