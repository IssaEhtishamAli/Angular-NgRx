import { Component } from "@angular/core";




@Component({
    selector:'app-header',
    template:`
    <mat-toolbar color="primary">
        <div fxLayoutAlign="start center" fxFlex="100%" fxHide.xs>
            <button mat-raised-button color="accent" routerLink="/post">Posts</button>
            <button mat-raised-button color="warn" routerLink="" routerLinkActiveOptions="{exact:true}">Users</button>
        </div>
    </mat-toolbar>
    `,
    styles:['']
})
export class HeaderComponent{

    constructor(){}
}