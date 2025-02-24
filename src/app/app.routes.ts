import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { VerMasComponent } from './components/ver-mas/ver-mas.component';

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
        path:'contacto',
        component:ContactoComponent 
    },
    {
        path:'verMas/:id',
        component: VerMasComponent
    },
    {
        path:'**',pathMatch:'full', redirectTo:'home'
    }

];
