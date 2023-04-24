import {Component, Input, OnInit} from '@angular/core'
import { User } from '../models/user'




@Component({
    selector:'youtube-user-list',
    template:`
        <div fxLayout="row wrap" fxLayoutAlign="space-between center" fxLayoutGap.gt-md="30px">
            <youtube-user-card [user]="user" *ngFor="let user of users"></youtube-user-card>
        </div>
    `,
    styles:[]
})
export class UserListComponenet implements OnInit{
    @Input() users!:User[]
    /**
     *
     */
    constructor() {
        
    }
    ngOnInit(){}
}