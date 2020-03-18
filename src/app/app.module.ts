import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InformationComponent } from './information/information.component';
import { InformationListComponent } from './information/information-list/information-list.component';

import { InformationDetailComponent } from './information/information-detail/information-detail.component';
import { InformationItemComponent } from './information/information-list/information-item/information-item.component';
import { InformationService } from './information/information.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataStorageService } from './shared/data-storage.service';
import { AuthComponent } from './auth/auth.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { LoadingSpinner } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptor } from './auth/auth-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    InformationListComponent,
    HeaderComponent,
    InformationDetailComponent,
    InformationItemComponent,
    AboutComponent,
    ContactComponent,
    AuthComponent,
    LoadingSpinner,
    DropdownDirective
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [InformationService,DataStorageService,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
