import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { global } from "./global";
import { PaidPost } from "../interfaces/paid-post.interface";

@Injectable()
export class BannerPlanService {
    public url: string;

    constructor (
        public _http: HttpClient
    ) {
        this.url = global.url;
    }

    index(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(`${this.url}banner-plan`, {headers: headers});
    }

}