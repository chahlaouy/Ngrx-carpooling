import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store'
import * as fromStore from '../store'

import { LoadingController } from '@ionic/angular';

import  { HomeService } from '../home.services/home.service'

@Component({
  selector: 'app-rides-list',
  templateUrl: './rides-list.component.html',
  styleUrls: ['./rides-list.component.scss'],
})
export class RidesListComponent implements OnInit {

  rides$: Observable<any>; 
  loaded$: Observable<any>;

  constructor(
    private homeService: HomeService,
    private router: Router,
    private store: Store,
    private loadingController: LoadingController
    ) { }

  ngOnInit() {
    this.rides$ =  this.store.select(fromStore.getRidesEntitiesAsArray)
    this.loaded$ = this.store.select(fromStore.getRidesLoading)
    // this.presentLoading().then((spinner) => {
    //   spinner.present()
    //   this.loaded$.subscribe(loaded => {
    //     if (loaded){
    //       spinner.dismiss()
    //     }
    //   })
    // })
  }

  pushHome(){
    this.router.navigate['/home']
  }

  async presentLoading() {
    return await this.loadingController.create({
      message: 'جار التحميل  ...',
    });
  }
  reload(){
    this.store.dispatch(new fromStore.LoadRides());
    this.presentLoading().then((spinner) => {
      spinner.present()
      this.loaded$.subscribe(loaded => {
        if (loaded){
          spinner.dismiss()
        }
      })
    })
    
  }

  
}
