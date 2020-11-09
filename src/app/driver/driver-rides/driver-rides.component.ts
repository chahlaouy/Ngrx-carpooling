import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators'

import { DriverService } from '../services/driver.service'

@Component({
  selector: 'app-driver-rides',
  templateUrl: './driver-rides.component.html',
  styleUrls: ['./driver-rides.component.scss'],
})
export class DriverRidesComponent implements OnInit {

  rides = []
  constructor(
    private driverSer: DriverService
  ) { }

  ngOnInit() {
    this.driverSer.getAllRides().pipe(map(value => {
      value.docs.forEach(doc => {

        console.log('tiiit')
        if (doc.data().userInfo.userUID == localStorage.getItem("uid")){
          // return this.rides.push(doc.data())
          return doc.data()
        }
      })
    })).subscribe(a => {
      console.log(a)
    })
    console.log(this.rides)
    console.log('tiiit')
  }

}
