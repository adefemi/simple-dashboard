export const AddDepartment = '[Department] add department';
export const UpdateDepartment = '[Department] update department';
export const setActiveDepartment = '[Department] setActive department';
export const deleteDepartment = '[Department] delete department';

export interface ActionInterface {
  readonly type: string;
  payload: any;
}
