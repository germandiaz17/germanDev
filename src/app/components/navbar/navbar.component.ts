import { Component } from '@angular/core';
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from '@angular/cdk/menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CdkMenuTrigger, CdkMenu, CdkMenuItem],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  
}
