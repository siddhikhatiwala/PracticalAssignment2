import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Stud from './stud';

@Injectable({
  providedIn: 'root'
})
export class StudService {
  uri = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  addStud(name :string, email :string, sem :number, age :number) {
    const obj = {
      name: name,
      email: email,
      sem: sem,
      age: age
    };
    console.log(obj);
    this.http.post(`${this.uri}`, obj).subscribe(res => console.log('Done'));
  }

  getStud() :Observable<Stud[]> {    
    return this.http.get<Stud[]>(`${this.uri}`);
  }

  editStud(id :any) {
    return this
            .http
            .get(`${this.uri}/${id}`);
    }

    updateStud(id :any,name :string, email :string, sem :number, age :number) {

      const obj = {
        name: name,
        email: email,
        sem: sem,
        age: age
        };
      this
        .http
        .put(`${this.uri}/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }

    deleteStud(id :any) {
      return this
                .http
                .delete(`${this.uri}/${id}`);
    }

}
