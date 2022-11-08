import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchesService } from 'src/app/services/branches.service';
import { Branch } from 'src/app/models/branch.model';
@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.css']
})
export class EditBranchComponent implements OnInit {

  branchDetails: Branch = {
    id: '',
    name: '',
    address: ''
  };
  constructor(private route: ActivatedRoute, private branchService: BranchesService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
        const id = params.get('id')
        if(id)
        {
          this.branchService.getBranch(id)
          .subscribe({
            next: (response) => {
              this.branchDetails = response;
          }
        });
        }
      }
    })

  }

  updateBranch() {
    this.branchService.updateBranch(this.branchDetails.id, this.branchDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['branches']);
      }
    });
  }

  deleteBranch(id: string) {
    this.branchService.deleteBranch(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['branches']);
      }
    });
  }

}
