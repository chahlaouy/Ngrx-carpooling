import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FirebaseService } from './driver/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
   
  currentUser: firebase.User;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private firebaseService: FirebaseService

  ) {
    
    this.initializeApp();
  }
  
  ngOnInit(){
    this.firebaseService.getUserState()
      .subscribe(user => {
        this.currentUser = user
      })
     
  }
  initializeApp() {
    this.platform.ready().then(() => {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
    });

  }

  onLogout(){
    this.firebaseService.signOut();
  }
}
