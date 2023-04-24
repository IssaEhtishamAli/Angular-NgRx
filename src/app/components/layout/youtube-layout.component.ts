import { Component } from "@angular/core";




@Component({
    selector:'app-youtube-layout',
    template:`
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    `,
    styles:[`
    `]
})
export class YoutubeLayoutComponent {
    constructor(){}

}