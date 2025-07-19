import { Routes } from '@angular/router';
import { BreweryBeers } from './brewery-beers/brewery-beers';
import { BreweryAbout } from './brewery-about/brewery-about';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'beers',
        pathMatch: 'full'
    },
    {
        path: 'beers',
        component: BreweryBeers

    },
    {
        path: 'about',
        component: BreweryAbout

    }


];
