import { Component } from "@angular/core";
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent{

    isAuthenticated=false;
  private userSub:Subscription;

 


  
  


  constructor(private dataStorageService:DataStorageService, private authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.userSub=this.authService.user.subscribe(user=>{

      this.isAuthenticated=!!user;
      console.log(!user);
      console.log(!!user);

    });
    
  }
  onSaveData(){
    this.dataStorageService.storeEvents();

  }
  onFetchData(){
    this.dataStorageService.fetchEvents().subscribe();
  }
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
  onLogOut(){
    this.authService.logout();
    
  }
}