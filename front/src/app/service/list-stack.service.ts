import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListStack } from '../model/ListStack.model';

@Injectable({
  providedIn: 'root'
})
export class ListStackService {

  baseUrl: String = "http://localhost:8080/api/v1/liststack";

  constructor(private http: HttpClient) { }

  findAll(): Observable<ListStack[]> {
    let url = `${this.baseUrl}/`;
    return this.http.get<ListStack[]>(url);
  }

}
