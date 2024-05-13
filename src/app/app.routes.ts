import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'portafolio',
        component:PortafolioComponent 
    },
    {
        path:'about',
        component:PortafolioComponent 
    },
    {
        path:'**', pathMatch:'full',redirectTo:''
    },

];
