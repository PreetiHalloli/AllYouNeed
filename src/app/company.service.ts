import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Company } from './company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  private companyUrl =  environment.companyUrl;

  public getAllCompanies():Observable<Company[]>{
    return this.http.get<Company[]>(this.companyUrl);
  }

  public getCompany(id: number):Observable<Company>{
    return this.http.get<Company>(this.companyUrl +"/"+ id);
  }

  public deleteCompany(id: number): Observable<Company>{
    return this.http.delete<Company>(this.companyUrl +"/"+ id)
  }

  public addCompany(company: Company):Observable<Company>{
    return this.http.post<Company>(this.companyUrl, company);
  }

  public updateCompany(id: number, company: Company):Observable<Company>{
    return this.http.put<Company>(this.companyUrl +"/"+ id, company)
  }

}
