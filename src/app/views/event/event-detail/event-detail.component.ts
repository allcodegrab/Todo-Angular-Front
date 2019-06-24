import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Utils } from 'src/app/shared/utils';
import { ActivatedRoute, Router } from '@angular/router';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { ServiceService } from "../eventservice/service.service"
@Component({
    selector: 'app-event-detail',
    templateUrl: './event-detail.component.html',
    styleUrls: ['./event-detail.component.scss']
})
export class eventDetailComponent implements OnInit {
   
   
    isNew: boolean;
    event: any = {};
    eventForm: FormGroup;
    id:any;
   

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
        private dl: DataLayerService,
        private toastr: ToastrService,
        private service : ServiceService
    ) { }

    ngOnInit() {
       
        this.buildeventForm(this.event);
        
    }

    buildeventForm(i: any = {}) {
        this.eventForm = this.fb.group({
            id: [i.id],
            title: [i.title],
            description: [i.description],
            timeOfEvent: [i.timeOfEvent],
            
        });
       
    }

   
    saveevent() {
       

        
        this.event = this.eventForm.value;
        
        var data={
           "title":this.event.title,
           "description":this.event.description,
           "timeOfEvent" :this.event.timeOfEvent
        }
       
        if(this.event.timeOfEvent > new Date())
        {
            this.service.addEvent(data)
            .subscribe(res =>{
                  
                  this.event.id=res;
                    this.dl.saveevent(this.eventForm.value)
                    .subscribe((savedevent: any) => {
                       
                            this.router.navigateByUrl('/event');
                            this.toastr.success('Event Saved!', 'Success!', { timeOut: 3000 });
                        
                    });
            });

        }else{
                this.toastr.warning('Choose Time greater than from now!', 'Warning!', { timeOut: 3000 });
        }
      

    }


  log(date) {
    console.log(date);
  }



}
