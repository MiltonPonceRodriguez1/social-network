import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { global } from "./global";
import { User } from "../models/user";


@Injectable()
export class UserService {
    public url: string;
    public identity: any;
    public token: any;

    constructor (
        public _http: HttpClient
    ) {
        this.url = global.url;
    }

    register(user: User): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(`${this.url}register`, user, {headers: headers});
    }

    login(user: User): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(`${this.url}login`, user, {headers: headers});
    }

    profile(token: string, id: number): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);
        return this._http.get(`${this.url}user/profile/${id}`, {headers: headers});
    }

    upload(token: string, file: any, id: number, disk: string = 'avatars'): Observable<any> {
        let headers = new HttpHeaders().set('Authorization', token);
        const formData = new FormData();
        formData.append('id', id.toString());
        formData.append('disk', disk);
        formData.append('file0', file, file.name);
        return this._http.post(`${this.url}user/upload`, formData, {headers: headers});
    }

    getIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity') || '{}');

        if (identity && identity != "{}") {
            this.identity = identity;
        } else {
            this.identity = null;
        }

        return this.identity;
    }

    getToken() {
        let token = localStorage.getItem('token');

        if (token && token != "undefined") {
            this.token = token;
        } else {
            this.token = null;
        }

        return this.token;
    }

    checkIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity') || '{}');
        
        if (Object.keys(identity).length > 0) {
            return true;
        } 
        return false;
    }
}