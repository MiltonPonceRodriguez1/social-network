import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Post } from '../interfaces/post.interface';
import { global } from "./global";

@Injectable()
export class PostService {
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = global.url;
    }

    index(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(`${this.url}post`, {headers: headers});
    }
}