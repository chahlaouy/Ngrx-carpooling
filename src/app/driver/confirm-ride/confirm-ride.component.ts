import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../services/driver.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-ride',
  templateUrl: './confirm-ride.component.html',
  styleUrls: ['./confirm-ride.component.scss'],
})
export class ConfirmRideComponent implements OnInit {

  rideInfo: any
  constructor(
    private router: Router,
    private userService: DriverService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.rideInfo = this.userService.getRideDetails(); 
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'ارجوك انتظر ...',
      duration: 5000
    });
    await loading.present().then(() => {
      this.confirmRide().then(() => {
        loading.dismiss();
        this.router.navigate(["/home"])
      })
    })

    const { role, data } = await loading.onDidDismiss();
  }

  confirmRide(){
    return this.userService.confirmRide()
  }

}
