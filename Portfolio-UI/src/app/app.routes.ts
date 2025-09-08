import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
    { path: '', component:AboutComponent},
    { path: 'aboutme', component:AboutComponent},
    { path: 'skills', component:SkillsComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'projects', component: ProjectsComponent}
];
