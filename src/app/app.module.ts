import {BrowserModule }from '@angular/platform-browser'; 
import {NgModule }from '@angular/core'; 
import {FormsModule}from '@angular/forms'; 

import {AppComponent }from './app.component'; 
import {aboutComponent }from './component/about.component'; 
import {userComponent}from './component/user.component'; 
import {HttpModule}from '@angular/http'; 
import {routing}from './app.routing'; 



@NgModule( {
declarations:[
    AppComponent, 
userComponent, 
aboutComponent
  ], 
imports:[
    BrowserModule, FormsModule, HttpModule, routing
  ], 
providers:[], 
bootstrap:[AppComponent]
})
export class AppModule {}
