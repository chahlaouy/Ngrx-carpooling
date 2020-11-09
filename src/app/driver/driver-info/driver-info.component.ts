import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

import { DriverService } from '../services/driver.service'

@Component({
  selector: 'app-driver-info',
  templateUrl: './driver-info.component.html',
  styleUrls: ['./driver-info.component.scss'],
})
export class DriverInfoComponent implements OnInit {

  userInfo : FormGroup;
  
  disabledVar= true;

  currentUser= null;

  constructor( 
    private fb: FormBuilder,
    private router:Router,
    private userService: DriverService
  ) { }

  ngOnInit() {
    this.userService.getCurrentsUserInfo().subscribe(user=>{
      this.currentUser = user.data()
     });
  }

}
