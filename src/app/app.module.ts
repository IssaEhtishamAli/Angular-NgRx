import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/layout/dashboard.component';
import { HeaderComponent } from './components/layout/header.component';
import { YoutubeLayoutComponent } from './components/layout/youtube-layout.component';
import { AngularMaterialModules } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PostComponent } from './containers/post.component';
import { UserComponent } from './containers/user.component';
import { FooterComponent } from './components/layout/footer.component';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { UserCardComponent } from './components/user-card.component';
import { UserListComponenet } from './components/user-list-component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    YoutubeLayoutComponent,
    PostComponent,
    UserComponent,
    FooterComponent,
    UserCardComponent,
    UserListComponenet
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularMaterialModules,
    HttpClientModule,
    StoreModule.forRoot(rootReducer)
  ],
  providers: [HttpService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
