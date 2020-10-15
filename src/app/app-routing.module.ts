import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


/**
 * Declaring The App Routes
 * 
 * We Use the lazy loading for loading our modules
 * 
 */

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'admin/drivers',
    loadChildren: () => import('./super-user/drivers/drivers.module').then( m => m.DriversModule)
  },
  {
    path: 'admin/riders',
    loadChildren: () => import('./super-user/riders/riders.module').then( m => m.RidersModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
