import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlossaryComponent } from './glossary/glossary.component';
import { HomeComponent } from './home/home.component';
import { IcoComponent } from './ico/ico.component';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'glossary', component: GlossaryComponent},
  {path: 'home', component: HomeComponent},
  {path: 'ico', component: IcoComponent},
  {path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: 'trending', component: TrendingComponent}
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
