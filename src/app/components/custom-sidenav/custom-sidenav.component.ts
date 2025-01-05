import { Component, Input, computed, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MatListModule,
    MatIconModule,
    CommonModule,
    RouterLink,
    RouterModule,
    
  ],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {

  sideNavCollapsed = signal(false);
  @Input() set collapsed( val: boolean ){
    this.sideNavCollapsed.set(val)
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      label: 'Home',
      route: '/home'
    },
    {
      icon: 'account_box',
      label: 'Sobre mi',
      route: '/about'
    },
    {
      icon: 'work',
      label: 'Portafolio',
      route: '/portafolio'
    },
    {
      icon: 'mail',
      label: 'Contacto',
      route: '/contacto'
    },
  ]);

  profilePicSize = computed(()=>this.sideNavCollapsed()? '32': '100' )

}
