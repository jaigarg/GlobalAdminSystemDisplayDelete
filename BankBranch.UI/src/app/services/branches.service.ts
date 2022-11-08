import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Branch } from '../models/branch.model';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllBranches(): Observable<Branch[]>{
    return this.http.get<Branch[]>(this.baseApiUrl + '/api/branches');
  }

  getBranch(id: string): Observable<Branch> {
    return this.http.get<Branch>(this.baseApiUrl + '/api/branches/' + id);
  }

  updateBranch(id: string, updateBranchRequest: Branch): Observable<Branch>
  {
    return this.http.put<Branch>(this.baseApiUrl + '/api/branches/' + id, updateBranchRequest)
  }

  deleteBranch(id: string): Observable<Branch>{
    return this.http.delete<Branch>(this.baseApiUrl + '/api/branches/' + id);
  }
}
