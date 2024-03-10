import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import {httpInterceptorProviders} from "./helpers/http.interceptor";
import { ModalComponent } from './modal/modal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MdbModalModule, MdbModalRef} from "mdb-angular-ui-kit/modal";

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MdbModalModule,
    FormsModule,
    MdbModalModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
