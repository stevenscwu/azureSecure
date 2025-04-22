import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getMessage() {
    return this.http.get('https://localhost:5001/weatherforecast'); // example API
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
}
