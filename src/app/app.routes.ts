import { Routes } from '@angular/router';
import { PlanetComponent } from './entities/components/planet/planet.component';
import { EmptyComponent } from './pages/components/empty/empty.component';
import { NavigationComponent } from './pages/components/navigation/navigation.component';
import { PlanetsComponent } from './pages/components/planets/planets.component';

export const routes: Routes = [
    {
        path: '',
        component: NavigationComponent,
    },
    {
        path: 'planets',
        component: PlanetsComponent,
    },
    {
        path: 'planets/:id',
        component: PlanetComponent,
    },
    {
        path: '**',
        component: EmptyComponent
    },
];
