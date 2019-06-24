import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from "../eventservice/service.service";

import { Utils } from 'src/app/shared/utils';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss']
})
export class eventListComponent implements OnInit {
    events: any[];
    delete:any=[];
    multiple:any = false;
    resEvent:any;

     eventForm: FormGroup;
    constructor(
        private dl: DataLayerService,
        private modalService: NgbModal,
        private toastr: ToastrService,
        private service : ServiceService,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.loadevents();
        this.buildeventForm(this.resEvent);
    }

     buildeventForm(i: any = {}) {
        this.eventForm = this.fb.group({
            id: [i.todoId],
            title: [i.title],
            description: [i.description],
            timeOfEvent: [new Date(i.timeOfEvent)],
            
        });
       
    }
    loadevents() {


        
        this.service.getAllEvent()
        .subscribe(res =>{
              
              this.events=res
           
        });

    }

    // enabling Multiple delete
    multipleDelete(){
            this.multiple=true;
    }


    // Deleting Event
    deleteevent(id, modal) {
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then((result) => {
                this.service.deleteEvent(id)
                    .subscribe(res =>{
                 

                    // In memory Db is used 

                      this.dl.deleteevent(id)
                    .subscribe(res => {
                        this.toastr.success('event Deleted!', 'Success!', { timeOut: 3000 }, { progressBar: true });
                        this.loadevents();
                    })
                      
                });
               
            }, (reason) => {
            });
    }

                 

    deleteMultipleEvent() {
            
             const eventsCheckedList = this.events.filter( (event) => event.checked );

             for(var i = 0 ; i < eventsCheckedList.length ;i++){
               this.delete[i] = eventsCheckedList[i].todoId;
                // In memory Db is used 
      
               this.dl.deleteevent(eventsCheckedList[i].todoId)
                    .subscribe(res => {
                        
                       
                    })
             }
   
                this.service.deleteMultipleEvent(this.delete)
                    .subscribe(res =>{
                    this.toastr.success('event Deleted!', 'Success!', { timeOut: 3000 }, { progressBar: true });
                    this.loadevents();

                   
                      
                });
              
    }


   //update a event
      updateevent(id, modal) {



        this.service.getEvent(id)
                    .subscribe(res =>{
                          this.buildeventForm(res);
                          console.log(res);
                          this.resEvent = res;
                    })


        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then((result) => {
                var event = this.eventForm.value;
                this.resEvent.todoId=event.id;
                this.resEvent.title= event.title;
                this.resEvent.description = event.description;
                this.resEvent.timeOfEvent = event.timeOfEvent;
                if(this.resEvent.timeOfEvent > new Date())
                {
                this.service.addEvent(this.resEvent)
                    .subscribe(res =>{
                 

                    // In memory Db is used 

                   
                        this.toastr.success('event Updated!', 'Success!', { timeOut: 3000 }, { progressBar: true });
                        this.loadevents();
                   
                      
                });
                }else{
                   this.toastr.warning('Choose Time greater than from now!', 'Warning!', { timeOut: 3000 }, { progressBar: true });
                }
               
            }, (reason) => {
            });
    }


}
