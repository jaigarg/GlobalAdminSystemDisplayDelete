import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from 'src/app/models/branch.model';
import { BranchesService } from 'src/app/services/branches.service';

@Component({
  selector: 'app-branches-list',
  templateUrl: './branches-list.component.html',
  styleUrls: ['./branches-list.component.css']
})
export class BranchesListComponent implements OnInit {

  branchDetails: Branch = {
    id: '',
    name: '',
    address: ''
  };
  branches: Branch[] = [];
  constructor(private route: ActivatedRoute, private branchesService: BranchesService, private router: Router) { }

  ngOnInit(): void {
    this.branchesService.getAllBranches().subscribe({
      next: (branches) => {
        this.branches = branches;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}
