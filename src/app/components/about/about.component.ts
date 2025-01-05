import { Component } from '@angular/core';
import { Herramientas } from '../../interfaces/herramientas';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {


  listaHerramientas:Herramientas[] = [
    {
      name:'HTML',
      percent: 80
    },
    {
      name:'CSS',
      percent: 80
    }
  ]

}
