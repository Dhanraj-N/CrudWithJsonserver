import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://localhost:2000/students';

  constructor(private http : HttpClient) { }

  getData (): Observable<any> {
   return this.http.get(this.url);
  }

  postData (data :any): Observable<any> {
    return this.http.post(this.url, data);
  }

  deletData (id : any): Observable<any>{
   return this.http.delete (`${this.url}/${id}`);
  }

  putData (data:any): Observable<any>{
    return this.http.put(`${this.url}`,data);
  }
  
}
