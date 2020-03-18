import { InformationModel } from './information.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';


export class InformationService{

    //eventSelected=new EventEmitter<InformationModel>();
    eventsAdded=new Subject<InformationModel[]>();

    
    

    /*private information_list:InformationModel[]=[
        new InformationModel('Montreal:Summer Hiking','Enjoy hiking this summer','Rue Beeri',1200,'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',new Date('4-02-2020 20:00:00')),
        new InformationModel('Sun Burn','A classic music festival','Boulverad de Maissoneavu',100,'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',new Date('8-5-2020 16:00:00')),
        new InformationModel('Art Event','Explore different arts','Snowdown',40,'https://images.unsplash.com/photo-1508997449629-303059a039c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',new Date('6-6-2020 18:30:00')),
        new InformationModel('Tomorrow land','Limited tickts','Belgium',100,'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',new Date('31-3-2020 19:30:00')),
        new InformationModel('Chowarasta:Music Band','Free passes for first 10 lucky people','Hyderabad',10000,'https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',new Date('7-5-2020 19:00:00')),
        new InformationModel('Food Buffet','Taste Multiple Cusinies','Woodland Beeri',1200,'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',new Date('9-4-2020 20:00:00'))
    ];*/

    private information_list:InformationModel[]=[];

    setEvents(events:InformationModel[]){
        this.information_list=events;
        this.eventsAdded.next(this.information_list.slice());
    }

    getInformation(){
        return this.information_list.slice();
    }
    getInformationWithId(index:number){
        return this.information_list[index];
    }

}