import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: 'trending', loadChildren: () => import('./trending/trending.component').then(m => m.TrendingComponent)}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
