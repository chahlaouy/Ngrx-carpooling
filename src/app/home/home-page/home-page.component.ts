import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HomeService } from '../home.services/home.service'

import { Store } from '@ngrx/store'
import * as fromStore from '../store'
@Component({
  selector: 'app-home-page', 
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  rides = [1,2,3,4]
  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: false,
    slidesPerView: 1.4
  }

  currentUser= null;

  constructor(
    private router: Router,
    private store: Store
    ) {}

  ngOnInit(){
    this.store.dispatch(new fromStore.LoadRides());
  }





  loginIn(){
    this.router.navigate(['login']);
  }
  pushList(){
    this.router.navigate(['home/list'])
  }
  pushLogin(){
    this.router.navigate(['register'])
  }

}
