import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { global } from "./global";

@Injectable()
export class PlanService {
    public url: string;

    constructor (
        public _http: HttpClient
    ) {
        this.url = global.url;
    }

    index(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(`${this.url}plan`, {headers: headers});
    }

    subscribe(token: string, data: any): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);
        return this._http.post(`${this.url}plan/subscribe`, data, {headers: headers});
    }

}