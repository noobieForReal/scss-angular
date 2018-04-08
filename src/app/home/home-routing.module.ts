
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';

const routesConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: MainComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'contact',
                component: ContactComponent
            }
        ]
    }

];

@NgModule({
    declarations: [
        HomeComponent,
        MainComponent,
        AboutComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routesConfig)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
