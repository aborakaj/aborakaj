import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
   
    private modalClosedEvent = new BehaviorSubject<boolean>(false);

    emitChildEvent(status: boolean){
       this.modalClosedEvent.next(status)
    }
  
    childEventListner(){
       return this.modalClosedEvent.asObservable();
     } 
  
  }
