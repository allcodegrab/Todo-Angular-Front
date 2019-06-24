import { Injectable } from '@angular/core';
import { LocalStoreService } from '../../../shared/services/local-store.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient ,HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor(private store: LocalStoreService,
    private router: Router,
    public http: HttpClient ) {
    	this.http = http;

    }

   
   addEvent(data){
    
    
    let headers = new HttpHeaders();
     headers=headers.append('Content-type', "application/json");
   
     return this.http.post<any>('http://localhost:4200/api/operr/todo/addEvent',data,{headers: headers})
         

  }

  

  deleteEvent(id){
    
    
     let headers = new HttpHeaders();
     headers=headers.append('Content-type', "application/json");   
     return this.http.get<any>('http://localhost:4200/api/operr/todo/deleteEvent/'+id,{headers: headers})
         

  }

  getEvent(id){
    
    
     let headers = new HttpHeaders();
     headers=headers.append('Content-type', "application/json");   
     return this.http.get<any>('http://localhost:4200/api/operr/todo/getEvent/'+id,{headers: headers})
         

  }

  deleteMultipleEvent(data){
    
    
     let headers = new HttpHeaders();
     headers=headers.append('Content-type', "application/json");   
     return this.http.post<any>('http://localhost:4200/api/operr/todo/deleteMultipleEvent',data,{headers: headers})
         

  }


  getAllEvent(){
    
    
     let headers = new HttpHeaders();
     headers=headers.append('Content-type', "application/json");   
     return this.http.get<any>('http://localhost:4200/api/operr/todo/getAllEvent',{headers: headers})
         

  }


}
