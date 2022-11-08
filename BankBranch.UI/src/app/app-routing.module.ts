import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchesListComponent } from './components/branches/branches-list/branches-list.component';
import { EditBranchComponent } from './components/branches/edit-branch/edit-branch.component';

const routes: Routes = [
  {
    path: '',
    component: BranchesListComponent 
  },
  {
    path: 'branches',
    component: BranchesListComponent 
  },
  {
    path: 'branches/delete/:id',
    component: EditBranchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
