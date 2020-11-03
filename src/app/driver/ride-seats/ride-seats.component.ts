import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../services/driver.service'

@Component({
  selector: 'app-ride-seats',
  templateUrl: './ride-seats.component.html',
  styleUrls: ['./ride-seats.component.scss'],
})
export class RideSeatsComponent implements OnInit {

  numberOfSeats: any;
  constructor(
    private userSer: DriverService,
    private router: Router
  ) { }


  ngOnInit() {}

  nextStepRidePrice(){
    this.userSer.setNumberOfSeats(this.numberOfSeats);
    this.router.navigate(['/driver/add/ride-day']);
  }

}
