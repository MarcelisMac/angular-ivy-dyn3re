import{NgModule}from'@angular/core';
import{RouterModule,Routes}from'@angular/router';
import { HomeComponent } from './home/home.component';
import { Name1Component } from './name1/name1.component';
import { Name2Component } from './name2/name2.component';

const routes: Routes= [{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'name1',component:Name1Component
},
{path:'name2',component:Name2Component
},
];

@NgModule({imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],})
  export class AppRoutingModule{}