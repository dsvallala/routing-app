import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
export const routes: Routes = [
    { path: 'sumedha', component: FirstComponent },
    { path: 'sumedha', component: FirstComponent },
    { path: 'subhash/:id', component: SecondComponent },
    { path: 'home', redirectTo: '/sumedha', pathMatch: 'full' },
    { path: '', redirectTo: '/sumedha', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
