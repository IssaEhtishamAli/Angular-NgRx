import {Component, Input, OnInit} from '@angular/core'
import { User } from '../models/user'



@Component({
    selector:'youtube-user-card',
    template:`
    <mat-card fxLayout="column" fxLayoutGap="50px" fxLayoutAlign="start stretch">
        <mat-card-title>{{this.user.name}}</mat-card-title>
        <mat-card-content>{{this.user.email}}</mat-card-content>
        <mat-card-content>{{this.user.address.street}}</mat-card-content>
</mat-card>
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