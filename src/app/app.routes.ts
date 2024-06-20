import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
export const routes: Routes = [
    { path: 'first-component', component: FirstComponent },
    { path: 'second-component/:id', component: SecondComponent },
    { path: 'home', redirectTo: '/first-component', pathMatch: 'full' },
    { path: '', redirectTo: '/first-component', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
