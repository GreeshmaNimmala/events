import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InformationModel } from '../information.model';
import { InformationService } from '../information.service';


@Component({
  selector: 'app-information-list',
  templateUrl: './information-list.component.html',
  styleUrls: ['./information-list.component.css']
})
export class InformationListComponent implements OnInit {

  

  constructor(private informationService:InformationService) { }

  information_list:InformationModel[];

   
  

  ngOnInit(){
    this.information_list=this.informationService.getInformation();
  }

  

}
