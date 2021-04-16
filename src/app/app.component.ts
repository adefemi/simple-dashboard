import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentObject } from './models/department.object';
import { Store } from '@ngrx/store';
import { AppState } from './models/app.state';
import { DepartmentService } from './services/department.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Departments';
  departments: DepartmentObject[];
  allData: DepartmentObject[];
  activeIndex: number;

  constructor(
    public router: Router,
    private store: Store<AppState>,
    private toastService: ToastrService,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.store.select('data').subscribe((a) => {
      this.departments = a.departments;
      this.allData = a.departments;
    });
  }

  onSearch = (value: string) => {
    this.departments = this.allData.filter(
      (e: DepartmentObject) =>
        e.departmentInfo.name.includes(value) ||
        e.departmentInfo.apiKey.includes(value) ||
        e.departmentContactPerson.name.includes(value) ||
        e.departmentContactPerson.email.includes(value) ||
        e.departmentContactPerson.telephone.includes(value)
    );
  };

  onEdit(activeIndex: number, dept: DepartmentObject): void {
    this.departmentService.postActiveDepartment({
      activeIndex,
      dept,
    });
    this.router.navigateByUrl('/add-department');
  }

  onDelete(activeIndex: number): void {
    this.activeIndex = activeIndex;
    let quickNode = document.createElement('div');
    quickNode.setAttribute('data-toggle', 'modal');
    quickNode.setAttribute('data-target', '#exampleModal');
    document.body.appendChild(quickNode);
    quickNode.click();
    document.body.removeChild(quickNode);
  }

  completeDelete(): void {
    this.departmentService.deleteDepartment(this.activeIndex);
    this.toastService.success('Department Delete successfully');
  }

  handleCreate(): void {
    this.departmentService.postActiveDepartment(null);
    this.router.navigateByUrl('/add-department');
  }
}
