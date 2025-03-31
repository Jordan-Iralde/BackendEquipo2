import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { AdminComponent } from '../../pages/admin/admin.component';

@Component({
  selector: 'app-admin-layout',
  imports: [
    HeaderComponent,
    FooterComponent,
    AdminComponent
  ],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
