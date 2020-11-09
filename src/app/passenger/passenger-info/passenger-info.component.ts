import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

import { PassengerService } from '../services/passenger.service'

@Component({
  selector: 'app-passenger-info',
  templateUrl: './passenger-info.component.html',
  styleUrls: ['./passenger-info.component.scss'],
})
export class PassengerInfoComponent implements OnInit {

  userInfo : FormGroup;
  
  disabledVar= true;

  currentUser= null;

  constructor( 
    private fb: FormBuilder,
    private router:Router,
    private passengerSer: PassengerService
  ) { }

  ngOnInit() {
    this.passengerSer.getUser().subscribe(user=>{
      this.currentUser = user.data() 
     });
  }

}
