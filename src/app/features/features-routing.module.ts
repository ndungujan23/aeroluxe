import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeaturesComponent } from './features.component';

const routes: Routes = [
    {
        path: '',
        component: FeaturesComponent,
    },
    {
        path: 'hotels',
        loadChildren: () => import('./hotels/hotels.module').then(
            (m) => m.HotelsModule
        ),
    },
    {
        path: 'flights',
        loadChildren: () => import('./flights/flights.module').then(
            (m) => m.FlightsModule
        ),
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FeaturesRoutingModule {}
