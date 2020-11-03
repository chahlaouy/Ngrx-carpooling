import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import  { HomeService } from '../home.services/home.service'

@Component({
  selector: 'app-rides-list',
  templateUrl: './rides-list.component.html',
  styleUrls: ['./rides-list.component.scss'],
})
export class RidesListComponent implements OnInit {

  rides = [];

  constructor(private homeService:HomeService, private router: Router) { }

  ngOnInit() {
    this.rides = this.homeService.getrides(); 
  }

  pushHome(){
    this.router.navigate(['home'])
  }

}
