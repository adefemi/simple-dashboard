import { DepartmentObject, ActiveDepartmentObject } from './department.object';

export interface AppState {
  readonly data: {
    departments: DepartmentObject[];
    activeDepartment: ActiveDepartmentObject;
  };
}
