import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router'; 
import { createComponent } from '@angular/compiler/src/core';
//an array of objects of type Routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes) //our routes are now registered in our app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
