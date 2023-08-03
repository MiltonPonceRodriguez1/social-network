import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { global } from "./global";
import { PaidPost } from "../interfaces/paid-post.interface";

@Injectable()
export class PaidPostService {
    public url: string;

    constructor (
        public _http: HttpClient
    ) {
        this.url = global.url;
    }

    index(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(`${this.url}paid-post`, {headers: headers});
    }

    store(token: string, post: PaidPost): Observable<any> {
        let headers = new HttpHeaders().set('Authorization', token);
        
        let formData = new FormData();

        formData.append('user_id', post.user_id.toString());
        formData.append('user_plan_id', post.user_plan_id.toString());
        formData.append('title', post.title);
        if (post.description !== null) formData.append('description', post.description);
        formData.append('category', post.category);

        if ( post.images !== null ) {
            post.images.forEach((file, i) => {
                formData.append(`file${i}`, file, file.name);
            });
        }

        return this._http.post(`${this.url}paid-post`, formData, {headers: headers});
    }

}