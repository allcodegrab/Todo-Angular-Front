import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utils } from '../utils';

@Injectable({
    providedIn: 'root'
})
export class DataLayerService {

    constructor(
        private http: HttpClient
    ) { }


    getevents() {
        return this.http.get<any[]>('/api/events');
    }
    saveevent(event) {
        
           
            return this.http.post<any[]>('/api/events/', event);
        
    }
    deleteevent(id) {
        return this.http.delete<any[]>('/api/events/'+id);
    }
}
