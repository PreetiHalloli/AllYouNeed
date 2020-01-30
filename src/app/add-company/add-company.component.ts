import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  addForm: FormGroup;
  domain: string[];
  locations:string[];
  
  constructor(private service: CompanyService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.domain = ['Retail', 'Banking', 'Financial', 'Health Care', 'Manufacturing']
    this.addForm = this.fb.group({
      name: [],
      ceo: [],
      yearOfEstablish: [],
      locations: [],
      branches: [],
      headquater: [],
      employees: [],
      domain: []
    })
  }

  addCompany(){
    console.log(this.addForm.value);
    this.service.addCompany(this.addForm.value).subscribe(      
      ()=> this.router.navigate(['/companies'])
    )
  }
}
