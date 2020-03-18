import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InformationDetailComponent } from './information/information-detail/information-detail.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes:Routes=[
    
    {
        path:'',component:InformationComponent,pathMatch:'full'
    },
    {
        path:'events',component:InformationComponent,children:[
            {
                path:':id',component:InformationDetailComponent
            }
        ]
    },
    {
        path:'about',component:AboutComponent
    },
    {
        path:'contact',component:ContactComponent
    },
    {
        path:'auth', component:AuthComponent
    }
]

@NgModule({

imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]

})


export class AppRoutingModule{

}