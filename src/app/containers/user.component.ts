import {Component, OnInit} from '@angular/core'
import { ApiService } from '../services/api.service'
import { User } from '../models/user';






@Component({
    selector:'app-user',
    template:`
    <h1>User Works!</h1>
    <mat-card fxLayout="column" fxLayoutAlign="start center">
        <youtube-user-list [users]="this.users"></youtube-user-list>
    </mat-card>
    `,
    styles:[``]
})
export class UserComponent implements OnInit{
    users:User[]=[]
    /**
     *
     */
    constructor(private apiService:ApiService) {
              
    }
    ngOnInit(){
        this.fetchData()  
    }
    fetchData(){
        this.apiService.getAllPosts().subscribe(data=>{
            this.users=data;
            console.log(data)
        })
    }
}