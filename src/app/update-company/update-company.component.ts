import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CompanyService } from '../company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../company.model';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  company: Company = new Company();
  updateForm: FormGroup;
  id: number;

  constructor(private service: CompanyService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.updateForm = this.fb.group({
      name: [],
      ceo: [],
      yearOfEstablish: [],
      locations: [],
      branches: [],
      headquater: [],
      employees: [],
      domain: []
    });

    this.getCompany();
  }

  getCompany() {
    this.service.getCompany(this.id).subscribe(
      data => this.company = data,
      err => console.log(err),
      () => this.bindValue()      
    );
  }

  bindValue() {
    this.updateForm.patchValue({
      name: this.company.name,
      ceo: this.company.ceo,
      yearOfEstablish: this.company.yearOfEstablish,
      locations: this.company.locations,
      branches: this.company.branches,
      headquater: this.company.headquater,
      employees: this.company.employees,
      domain: this.company.domain
    })
  }

  updateCompany(){
    this.service.updateCompany(this.id, this.updateForm.value).subscribe(
      () => this.router.navigate(['/companies'])
    )
  }

}
