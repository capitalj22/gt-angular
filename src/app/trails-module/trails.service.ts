import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TrailsService {
    private apiUrl: string = 'http://localhost:3010';

    constructor(private http: HttpClient) {}

    public getTrailSummaries(): Observable<any> {
        return this.http.get('assets/mock-data/trails/trailSummaries.json');
    }

    public getFilteredTrailSummaries(activities, tags): Observable<any> {
        const summariesObject = this.http.get('assets/mock-data/trails/trailSummaries.json');
        
        console.log(summariesObject);
        
        return summariesObject;
    }

    public getTrailImage(id): Observable<Blob> {
        return this.http.get(`assets/img/trails/${id}.jpg`, {responseType: "blob"});
    }

    public getTrails(): Observable<Object> {
        return this.http.get(`${this.apiUrl}/api/trails`);
    }

    public getFilteredTrails(filterObj): Observable<Object> {
        return this.http.get(``)
    }

    public getTags(): Observable<Object> {
        return this.http.get(`${this.apiUrl}/api/tags`);
    }
}
