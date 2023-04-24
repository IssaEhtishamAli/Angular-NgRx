import {Component, OnInit} from '@angular/core'
import { ApiService } from '../services/api.service'
import { User } from '../models/user';
import { Store } from '@ngrx/store';
import { UserListRequestAction, UserListSuccessAction } from '../actions/user-action';
import { getUserLoaded, getUserLoading, getUsers,RootReducerState } from '../reducers';
import { combineLatest } from 'rxjs';






@Component({
    selector:'app-user',
    template:`
    <h1>User Works!</h1>
    <div fxLayout="column" fxLayoutAlign="start center">
        <youtube-user-list [users]="this.users"></youtube-user-list>
</div>
    `,
    styles:[``]
})
export class UserComponent implements OnInit{
    users:User[]=[]
    constructor(private apiService:ApiService,private store:Store<RootReducerState>) {
              
    }
    ngOnInit(){
        this.fetchData()  
    }
    fetchData(){
        const loading$ = this.store.select(getUserLoading);
        const loaded$ =this.store.select(getUserLoaded);
        const getUserData$ =this.store.select(getUsers);
        combineLatest([loaded$,loading$]).subscribe((data)=>{
            if(!data[0] && !data[1]){
                this.store.dispatch(new UserListRequestAction());
                this.apiService.getAllPosts().subscribe(data=>{
                    this.users=data;
                    console.log('Data api',data);
                    this.store.dispatch(new UserListSuccessAction({data}))
                });        
            }
        })
        getUserData$.subscribe((data)=>{
            this.users=data;
            console.log('Data state',data)
        })
    }
}