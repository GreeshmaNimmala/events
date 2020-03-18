import { Component, OnInit } from '@angular/core';
import { InformationModel } from './information.model';
import { Router } from '@angular/router';
import { InformationService } from './information.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  //isClosed:string=null;

  /*onSelect:InformationModel;

  

  //constructor(private informationService:InformationService,private _location:Location) { }

  constructor(){}

  ngOnInit(){
    this.informationService.eventSelected.subscribe(
      (event:InformationModel)=>{
        this.onSelect=event;
      }
    )
  }
  /* closed(){
     this._location.back();
     
   }*/
   ngOnInit(){
     
   }
  

}
