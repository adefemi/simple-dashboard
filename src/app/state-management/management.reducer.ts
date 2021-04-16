import {
  ActiveDepartmentObject,
  AppMainModelType,
  DepartmentObject,
} from './../models/department.object';
import {
  ActionInterface,
  AddDepartment,
  setActiveDepartment,
  UpdateDepartment,
  deleteDepartment,
} from './management.action';

const initialState: AppMainModelType = {
  departments: [
    {
      departmentInfo: {
        name: 'Oseni Adefemi',
        apiKey: 'jkdekjjkds89930923092',
        extraData: [],
      },
      departmentContactPerson: {
        name: '',
        email: '',
        telephone: '',
        extraData: [],
      },
    },
  ],
};

export function departmentReducer(
  state: AppMainModelType = initialState,
  action: ActionInterface
) {
  switch (action.type) {
    case AddDepartment:
      return {
        ...state,
        departments: [...state.departments, action.payload],
      };
    case setActiveDepartment:
      return {
        ...state,
        activeDepartment: action.payload,
      };
    case UpdateDepartment:
      const newState = {
        ...state,
        departments: state.departments.map(
          (dept: DepartmentObject, id: number) => {
            if (id === action.payload.activeIndex) {
              return action.payload.dept;
            }
            return dept;
          }
        ),
      };
      return newState;
    case deleteDepartment:
      const newValue = {
        ...state,
        departments: state.departments.filter(
          (_, id: number) => id !== action.payload
        ),
      };
      return newValue;
    default:
      return state;
  }
}
