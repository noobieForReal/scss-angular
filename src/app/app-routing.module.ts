import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routeConfig: Routes = [
  { path: 'login', component: LoginComponent, },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routeConfig),
    HomeModule,
    FormsModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
