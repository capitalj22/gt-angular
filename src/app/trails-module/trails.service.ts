import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TrailsService {
    constructor(private http: HttpClient) {}

    public getTrailSummaries(): Observable<any> {
        return this.http.get('assets/mock-data/trails/trailSummaries.json');
    }

    public getTrailImage(id): Observable<Blob> {
        return this.http.get(`assets/img/trails/${id}.jpg`, {responseType: "blob"});
    }
}
