import { ActiveDepartmentObject } from './../models/department.object';
import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DepartmentObject } from '../models/department.object';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app.state';

@Component({
  selector: 'app-make-payment',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss'],
})
export class AddDepartmentComponent implements OnInit {
  departmentData: DepartmentObject;
  loading = false;
  isEdit = false;
  activeIndex: number;

  constructor(
    private departmentService: DepartmentService,
    private store: Store<AppState>,
    private toastService: ToastrService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.store.select('data').subscribe((a) => {
      if (a.activeDepartment) {
        this.isEdit = true;
        this.departmentData = {
          departmentInfo: {
            name: a.activeDepartment.dept.departmentInfo.name,
            apiKey: a.activeDepartment.dept.departmentInfo.apiKey,
            extraData: a.activeDepartment.dept.departmentInfo.extraData,
          },
          departmentContactPerson: {
            name: a.activeDepartment.dept.departmentContactPerson.name,
            email: a.activeDepartment.dept.departmentContactPerson.email,
            telephone:
              a.activeDepartment.dept.departmentContactPerson.telephone,
            extraData:
              a.activeDepartment.dept.departmentContactPerson.extraData,
          },
        };
        this.activeIndex = a.activeDepartment.activeIndex;
      } else {
        this.departmentData = {
          departmentInfo: {
            name: '',
            apiKey: '',
            extraData: [],
          },
          departmentContactPerson: {
            name: '',
            email: '',
            telephone: '',
            extraData: [],
          },
        };
      }
    });
  }

  onSubmit(): void {
    this.loading = true;
    if (this.isEdit) {
      this.departmentService
        .updateDepartment({
          activeIndex: this.activeIndex,
          dept: this.departmentData,
        })
        .subscribe((a) => {
          this.toastService.success('Department Updated successfully');
          this.router.navigateByUrl('/');
        });
    } else {
      this.departmentService
        .postDepartment(this.departmentData)
        .subscribe((a) => {
          this.toastService.success('Department Registered successfully');
          this.router.navigateByUrl('/');
        });
    }
  }
}
