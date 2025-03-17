import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { VentasComponent } from "../../pages/ventas/ventas.component";
import { AboutComponent } from "../../pages/about/about.component";
import { MainComponent } from "../../pages/main/main.component";

@Component({
  selector: 'app-main-layout',
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet
],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
