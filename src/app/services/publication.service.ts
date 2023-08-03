import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { global } from "./global";
import { Publication } from "../interfaces/publication.interface";

@Injectable()
export class PublicationService {
    public url: string;

    constructor (
        public _http: HttpClient
    ) {
        this.url = global.url;
    }

    index(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(`${this.url}publication`, {headers: headers});
    }

    store(token: string, publication: Publication): Observable<any> {
        let headers = new HttpHeaders().set('Authorization', token);

        let formData = new FormData();
        formData.append('user_id', publication.user_id.toString());
        if (publication.text !== null) formData.append('text', publication.text);
        if (publication.file !== null) formData.append('file0', publication.file, publication.file.name);

        return this._http.post(`${this.url}publication`, formData, {headers: headers});
    }

}