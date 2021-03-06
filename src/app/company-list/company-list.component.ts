import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: Company[];
  totalRecord: number;
  page: number = 1;

  constructor(private service: CompanyService) { }

  ngOnInit() {
    this.publicgetAllCompanies();
  }

  publicgetAllCompanies() {
    this.service.getAllCompanies().subscribe(
      (data) => {
        this.companies = data;
        this.totalRecord = this.companies.length
      })
  }

  deleteCompany(id: number) {
    this.service.deleteCompany(id).subscribe(
      () => this.publicgetAllCompanies()
    )
  }
}
