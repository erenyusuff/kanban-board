import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http:HttpClient) {}
  getBoard(id: number | null){
    return this.http.get(environment.api + '/boards/'+id+'');
  }
}
