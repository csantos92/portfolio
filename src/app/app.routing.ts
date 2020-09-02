//Router imports
import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

//Component imports
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { pathToFileURL } from 'url';

//Routes array
const appRoutes: Routes = [
    {path: '', component: AboutComponent },
    {path: 'about', component: AboutComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: ErrorComponent}
];

//Export router module
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);