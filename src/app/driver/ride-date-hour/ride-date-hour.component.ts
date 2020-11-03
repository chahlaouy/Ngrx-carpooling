import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../services/driver.service'
@Component({
  selector: 'app-ride-date-hour',
  templateUrl: './ride-date-hour.component.html',
  styleUrls: ['./ride-date-hour.component.scss'],
})
export class RideDateHourComponent implements OnInit {

  
  numberOfSeats: any;
  constructor(
    private userSer: DriverService,
    private router: Router
  ) { }


  ngOnInit() {}

  nextStepRidePrice(){
    this.userSer.setNumberOfSeats(this.numberOfSeats);
    this.router.navigate(['add/ride-price']);
  }

}
