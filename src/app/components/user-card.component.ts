import {Component, Input, OnInit} from '@angular/core'
import { User } from '../models/user'



@Component({
    selector:'youtube-user-card',
    template:`
    <div fxLayout="column" fxLayoutGap="20px" fxLayoutAlign="start stretch">
        <mat-card-title>{{this.user.name}}</mat-card-title>
        <mat-card-content>{{this.user.email}}</mat-card-content>
    </div>
    `,
    styles:[``]
})
export class UserCardComponent{
    @Input() user!: User;
    /**
     *
     */
    constructor() {
    
        
    }
}