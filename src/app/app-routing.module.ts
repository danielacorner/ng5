import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// first import the components to set up routing for
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: '', //home path
    component: HomeComponent
  },
  {
    path: 'about/:id', //:route-parameter & address bar path
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
