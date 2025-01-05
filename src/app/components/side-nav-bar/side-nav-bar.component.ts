import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-side-nav-bar',
  standalone: true,
  imports: [MatToolbarModule,
    MatButtonModule, 
    CommonModule, 
    MatIconModule,
    MatSidenavModule
  ],
  templateUrl: './side-nav-bar.component.html',
  styleUrl: './side-nav-bar.component.css'
})
export class SideNavBarComponent {

}
