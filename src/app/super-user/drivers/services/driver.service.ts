import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Driver } from "../models/driver.model";

@Injectable({
  providedIn: "root"
})
export class DriverService {
  private driversUrl = "http://localhost:3000/admin/drivers";

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.driversUrl);
  }

  getCustomerById(payload: number): Observable<Driver> {
    return this.http.get<Driver>(`${this.driversUrl}/${payload}`);
  }

  createCustomer(payload: Driver): Observable<Driver> {
    return this.http.post<Driver>(this.driversUrl, payload);
  }

  updateCustomer(driver: Driver): Observable<Driver> {
    return this.http.patch<Driver>(
      `${this.driversUrl}/${driver.id}`,
      driver
    );
  }

  deleteCustomer(payload: number) {
    return this.http.delete(`${this.driversUrl}/${payload}`);
  }
}