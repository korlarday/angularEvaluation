import { EditingComponent } from './editing/editing.component';
import { FilteringComponent } from './filtering/filtering.component';
import { SortingComponent } from './sorting/sorting.component';
import { PagingComponent } from './paging/paging.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/paging', pathMatch: 'full' },
  { path: 'paging', component: PagingComponent },
  { path: 'sorting', component: SortingComponent },
  { path: 'filtering', component: FilteringComponent },
  { path: 'editing', component: EditingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
