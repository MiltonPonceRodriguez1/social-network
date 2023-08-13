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

    store( token: string, post: Post ): Observable<any> {
        let headers = new HttpHeaders().set('Authorization', token);
        let formData = new FormData();

        formData.append('user_id', post.user_id.toString());
        formData.append('plan_id', post.plan_id.toString());
        formData.append('title', post.title);
        formData.append('category', post.category);

        if (post.description !== null) formData.append('description', post.description);
        if (post.email !== null) formData.append('email', post.email);
        if (post.company !== null) formData.append('company', post.company);
        if (post.phone !== null) formData.append('phone', post.phone);
        
        if ( post.images !== null ) {
            post.images.forEach((file, i) => {
                formData.append(`file${i}`, file, file.name);
            });
        }

        return this._http.post(`${this.url}post`, formData, {headers: headers});
    }

}