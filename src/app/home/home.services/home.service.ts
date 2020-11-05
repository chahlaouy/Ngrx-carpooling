import { Injectable } from '@angular/core';

import {  AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  data = [
    {
      name: "محمد بن زايد",
      price: "250",
      class: "", 
      expanded: true,
      details: {
        depart: "جدة",
        arrival: "الرياض",
        time: new Date()
      }
    },
    {
      name: "محمد بن زايد",
      price: "250",
      class: "yellow",
      expanded: true,
      details: {
        depart: "جدة",
        arrival: "الرياض",
        time: new Date()
      }
    },
    {
      name: "محمد بن زايد",
      price: "250",
      class: "",
      expanded: true,
      details: {
        depart: "جدة",
        arrival: "الرياض",
        time: new Date()
      }
    },
    {
      name: "محمد بن زايد",
      price: "250",
      class: "yellow",
      expanded: true,
      details: {
        depart: "جدة",
        arrival: "الرياض",
        time: new Date()
      }
    },
    
  ]

  requests=[
    {
      name: "john",
      age: "30",
      destination: "jeddah 1st ",
      currentLocation: "jeddah 1st ",
      nbSeats: 3
    },
    {
      name: "john",
      age: "30",
      destination: "jeddah 1st ",
      currentLocation: "jeddah 1st ",
      nbSeats: 3
    },
    {
      name: "john",
      age: "30",
      destination: "jeddah 1st ",
      currentLocation: "jeddah 1st ",
      nbSeats: 3
    },
    {
      name: "john",
      age: "30",
      destination: "jeddah 1st ",
      currentLocation: "riadh 1st ",
      nbSeats: 3
    }

  ]

  constructor(
    private db: AngularFirestore
  ) { }

  getAllRides(){
    return this.db.collection("rides").get()
  }

  getRidesByDate(dateBegin: any, dateEnd: any){
    
  }

  getRidesByFavorite(favorite: any){
    
  }

  getRidesByLocation(source: any, destination: any){
    
  }

  

  getRequests(){
    return this.requests
  }
}
