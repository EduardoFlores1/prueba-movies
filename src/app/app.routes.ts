import { Routes } from '@angular/router';
import { MainpageComponent } from './pages/mainpage/mainpage.component';

export const routes: Routes = [
  {
    path: "",
    component: MainpageComponent
  },
  {
    path: "**",
    redirectTo: "/"
  }
];
