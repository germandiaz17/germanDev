//importacion de componentes
import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

//importaciond de dependencias
import { Component } from '@angular/core';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HomeComponent, NavbarComponent],
  templateUrl: './layout.component.html'
})
export class LayoutComponent {
  
}
