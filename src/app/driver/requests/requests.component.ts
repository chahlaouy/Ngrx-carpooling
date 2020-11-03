import { Component, OnInit } from '@angular/core';
import { DriverService } from '../services/driver.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {
  
  requests= null;
  constructor(private userService: DriverService) { }

  ngOnInit() {
    this.initializeRequests();
  }

  initializeRequests(){
     this.userService.getCurrentsUserInfo().subscribe(a=>{
      this.requests = a.data().userCar;
     });
  }

}
