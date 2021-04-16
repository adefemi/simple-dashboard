interface extraDataObject {
  [key: string]: string;
}

export interface DepartmentObject {
  departmentInfo: {
    name: string;
    apiKey: string;
    extraData: extraDataObject[];
  };
  departmentContactPerson: {
    name: string;
    email: string;
    telephone: string;
    extraData: extraDataObject[];
  };
}

export interface ActiveDepartmentObject {
  activeIndex?: number;
  dept?: DepartmentObject;
}

export interface AppMainModelType {
  departments: DepartmentObject[];
  activeDepartment?: ActiveDepartmentObject;
}
