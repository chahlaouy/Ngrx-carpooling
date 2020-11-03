import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HomeService } from '../home.services/home.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  rides = [];
  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: false,
    slidesPerView: 1.4
  }

  currentUser= null;

  constructor(
    private homeService:HomeService,
    private router: Router,
    ) {}

  ngOnInit(){
    this.rides = this.homeService.getrides();
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
