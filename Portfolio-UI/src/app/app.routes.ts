import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: '', component:AboutComponent},
    { path: 'aboutme', component:AboutComponent}
];
