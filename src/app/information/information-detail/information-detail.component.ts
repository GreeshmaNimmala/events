import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InformationModel } from '../information.model';
import { InformationService } from '../information.service';
import { ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-information-detail',
  templateUrl: './information-detail.component.html',
  styleUrls: ['./information-detail.component.css']
})
export class InformationDetailComponent implements OnInit {

  selectedList:InformationModel;

  id:number;

  

  

  //@Output() close=new EventEmitter<void>();




  constructor(private informationService:InformationService,private route:ActivatedRoute, private location:Location) { }

  ngOnInit(){
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.selectedList=this.informationService.getInformationWithId(this.id);
      }
    )
  }
  
  onClose(){
    this.location.back();

  }
  

}
