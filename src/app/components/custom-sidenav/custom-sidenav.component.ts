import { Component, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MatListModule,
    MatIconModule
  ],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {

  menuItems = signal<MenuItem[]>([
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics'
    },
    {
      icon: 'comments',
      label: 'Comments',
      route: 'comments'
    },
  ]);

}
