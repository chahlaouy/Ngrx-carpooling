import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { DriverService } from '../services/driver.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ride-source',
  templateUrl: './ride-source.component.html',
  styleUrls: ['./ride-source.component.scss'],
})
export class RideSourceComponent implements OnInit {

  @ViewChild('search')
  public searchElementRef: ElementRef;


  error = null;
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom:number;
  address: string = null;
  private geoCoder;


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private userSer: DriverService,
    private router: Router
  ) { }

  ngOnInit() {} 

  ngAfterViewInit(){
     //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          // console.log(place)

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.address = place.formatted_address;
          this.error = "error" 
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }

  markerDragEnd($event: any) {
    // console.log($event);
    this.latitude = $event.latLng.lat();
    this.longitude = $event.latLng.lng();
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          // window.alert('No results found');
        }
      } else {
        // window.alert('Geocoder failed due to: ' + status);
      }

    });
  }


  nextStepDestination(){
    if (this.address == null){
      return
    }
    this.userSer.setRideSource({lat: this.latitude, lng: this.longitude, address: this.address});
    this.router.navigate(['/driver/add/ride-destination'])
  }

}
