import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {FormControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http:HttpClient) {}
  getBoard(id: number | null){
    return this.http.get(environment.api + '/boards/'+id+'');
  }

  create(data: any){
    return this.http.post(environment.api + '/cards', data);
  }

  updateOrder(data: any) {
    return this.http.patch(environment.api + '/cards/update', data);
  }
}
