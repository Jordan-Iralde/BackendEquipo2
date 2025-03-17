import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
    { 
        path: '', component: MainLayoutComponent,
        children: [
            {path: '', component: MainComponent},
            { path: 'ventas', component: VentasComponent},
            { path: 'about', component: AboutComponent}
            ],
    },
    { path: 'login', component: AuthLayoutComponent } // Login sin header/footer
      
];
