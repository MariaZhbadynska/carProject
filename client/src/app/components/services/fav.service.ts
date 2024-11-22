import { Observable } from "rxjs";
import { Car } from "../models/car";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class FavService {
    url: string = 'http://localhost:8000/api/favs';
  
    constructor(private http: HttpClient) {}
  
    pushFav(car: Car): Observable<Car> {
      return this.http.post<Car>(this.url, car);
    }
  
    getFavs(): Observable<Car[]> {
      return this.http.get<Car[]>(this.url);
    }
    
    deleteFavP(id: string): Observable<any> {
      return this.http.delete<any>(`${this.url}/${id}`)
    }
  }
  