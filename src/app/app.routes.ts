import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'portafolio',
        component:PortafolioComponent 
    },
    {
        path:'about',
        component:AboutComponent 
    },
    {
        path:'**',pathMatch:'full', redirectTo:'home'
    }

];
