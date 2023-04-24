import { User } from "../models/user";

export const USER_LIST_REQUEST='user list request'
export const USER_LIST_SUCCESS='user list success'
export const USER_LIST_FAILED='user list failed'




export class UserListRequestAction{
    readonly type =USER_LIST_REQUEST;
}
export class UserListSuccessAction{
    readonly type =USER_LIST_SUCCESS;
    constructor(public payload?:{data:User[]}) {}

}
export class UserListFailedAction{
    readonly type =USER_LIST_FAILED;
}