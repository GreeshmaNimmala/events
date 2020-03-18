import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InformationModel } from '../../information.model';



@Component({
  selector: 'app-information-item',
  templateUrl: './information-item.component.html',
  styleUrls: ['./information-item.component.css']
})
export class InformationItemComponent implements OnInit {

  @Input() info:InformationModel;

  @Input() id:number;

  

  constructor() { }

  ngOnInit(){
  }
  

}
