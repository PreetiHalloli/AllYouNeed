import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';


const routes: Routes = [
  /* {
    path: '',
    redirectTo: '/companies',
    pathMatch: 
  }, */
  {
    path:"companies",
    component: CompanyListComponent
  },
  {
    path: "companies/:id",
    component: CompanyDetailComponent
  },
  {
    path: "add",
    component: AddCompanyComponent
  },
  {
    path: "edit/:id",
    component: UpdateCompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
