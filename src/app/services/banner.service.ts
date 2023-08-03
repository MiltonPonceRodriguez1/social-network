import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Banner } from "../interfaces/banner.interface";

import { global } from "./global";

@Injectable()
export class BannerService {
    public url: string;

    constructor (
        public _http: HttpClient
    ) {
        this.url = global.url;
    }

    index(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(`${this.url}banner`, {headers: headers});
    }

    store( token: string, banner: Banner ): Observable<any> {
        let headers = new HttpHeaders().set('Authorization', token);

        let formData = new FormData();

        formData.append('user_id', banner.user_id.toString());
        formData.append('banner_plan_id', banner.banner_plan_id.toString());
        if (banner.company !== null) formData.append('company', banner.company);
        if (banner.phone !== null) formData.append('phone', banner.phone);
        if (banner.email !== null) formData.append('email', banner.email);
        if (banner.website !== null) formData.append('website', banner.website);
        if (banner.banner !== null) formData.append('file0', banner.banner);
        
        return this._http.post(`${this.url}banner`, formData, {headers: headers});
    }

}