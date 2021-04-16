import {
  deleteDepartment,
  setActiveDepartment,
  UpdateDepartment,
} from './../state-management/management.action';
import { ActiveDepartmentObject } from './../models/department.object';
import { AddDepartment } from '../state-management/management.action';
import { DepartmentObject } from '../models/department.object';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app.state';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private store: Store<AppState>) {}

  postDepartment(department: DepartmentObject): Observable<DepartmentObject> {
    let res = new Observable<DepartmentObject>((subscriber) => {
      setTimeout(() => {
        this.store.dispatch({ type: AddDepartment, payload: department });
        subscriber.next(department);
        subscriber.complete();
      }, 2000);
    });

    return res;
  }

  updateDepartment(
    data: ActiveDepartmentObject
  ): Observable<ActiveDepartmentObject> {
    let res = new Observable<ActiveDepartmentObject>((subscriber) => {
      setTimeout(() => {
        this.store.dispatch({ type: UpdateDepartment, payload: data });
        subscriber.next(data);
        subscriber.complete();
      }, 2000);
    });

    return res;
  }

  postActiveDepartment(data: ActiveDepartmentObject) {
    this.store.dispatch({ type: setActiveDepartment, payload: data });
  }

  deleteDepartment(activeIndex: number) {
    this.store.dispatch({ type: deleteDepartment, payload: activeIndex });
  }
}
