
import { AppComponent } from './../app.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';

@NgModule({
    declarations: [
    ContactComponent],
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    exports: [
        RouterModule
    ]
})
export class HomeModule { }
