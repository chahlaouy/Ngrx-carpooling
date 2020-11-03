import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../services/driver.service'

@Component({
  selector: 'app-ride-date-day',
  templateUrl: './ride-date-day.component.html',
  styleUrls: ['./ride-date-day.component.scss'],
})
export class RideDateDayComponent implements OnInit {

  numberOfSeats: any;
  constructor(
    private userSer: DriverService,
    private router: Router
  ) { }


  ngOnInit() {}

  nextStepRidePrice(){
    this.userSer.setNumberOfSeats(this.numberOfSeats);
    this.router.navigate(['/driver/add/ride-hour']); 
  }

}
