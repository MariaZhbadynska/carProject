import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  url: string = 'http://localhost:8000/api/cars'


  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.url)
    
  }
  getCarById(id: string): Observable<Car> {
    return this.http.get<Car>(`${this.url}/${id}`)
    
  }
  

  editCar(id: string, car: Car): Observable<any> {
    return this.http.put(`${this.url}/${id}`, car)
    
  }
  searchCar(name: string): Observable<Car[]> {
    const searchUrl = `${this.url}?name_like=${name}`; 
    return this.http.get<Car[]>(searchUrl);
  }
  deleteCar(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`)
  }

  addCar(car: Car): Observable<any> {
    car._id = this.generateId();
    return this.http.post(this.url, car)
    
  }
  private generateId(): string {
    return Date.now().toString()
  }
  
  
}
