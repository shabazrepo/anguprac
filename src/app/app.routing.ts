import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { aboutComponent } from './component/about.component';
import { userComponent} from './component/user.component';





const appRoutes: Routes = [
   { path: '', component: userComponent },
   { path: 'about', component: aboutComponent },
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
