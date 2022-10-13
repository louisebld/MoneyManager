import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { depenseListComponent } from './depense-list/depense-list.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
    { path: 'depenses', component: depenseListComponent },
    //  { path: '', redirectTo: 'depenses', pathMatch: 'full' },
    {path: '', component:SigninComponent},

];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })

export class AppRoutingModule {}