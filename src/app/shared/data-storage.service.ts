import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { InformationService } from '../information/information.service';
import { InformationModel } from '../information/information.model';
import { AuthService } from '../auth/auth.service';
import { take, tap,exhaustMap } from 'rxjs/operators';

@Injectable()
export class DataStorageService{

constructor(private http:HttpClient,private infoService:InformationService,private authService:AuthService){}

storeEvents(){
    const events=this.infoService.getInformation();
    this.http.put('https://ng-events-98176.firebaseio.com/events.json',events).subscribe(
        response=>{
            console.log(response);
        });
}
fetchEvents(){
    
        return this.http.get<InformationModel[]>('https://ng-events-98176.firebaseio.com/events.json').
        pipe(tap(events=>{
            return this.infoService.setEvents(events);

        }));
            //console.log(events);

    


        }

    
    
    

}