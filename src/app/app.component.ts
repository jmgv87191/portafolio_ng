import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
      HomeComponent,
      CommonModule, 
      MatToolbarModule,
      SideNavBarComponent,
      MatSidenavModule,
      MatIconModule,
      MatButtonModule,
      CustomSidenavComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio_ng';
}
