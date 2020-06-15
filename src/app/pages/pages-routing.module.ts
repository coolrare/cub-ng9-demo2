import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './blank/blank.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'blank' },
  { path: 'blank', component: BlankComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
