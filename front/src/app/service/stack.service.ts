import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stack } from '../model/Stack.model';

@Injectable({
  providedIn: 'root'
})

export class StackService {

  baseUrl: String = "http://localhost:8080/api/v1/stack";

  constructor(private http: HttpClient) {}

    findAll():Observable<Stack[]> {
      let url = `${this.baseUrl}/`
      return this.http.get<Stack[]>(url)
    }


}
