import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import {  MatSelectModule } from '@angular/material/select';
import { ProductsComponent } from './dashboard/products/products.component';
import {MatCardModule} from '@angular/material/card'
import { HttpClientModule } from '@angular/common/http'; 
import { HttpService } from './service/http/http.service';
import { SearchPipe } from './pipe/searchpipe/search.pipe';
import { ShowitemComponent } from './showitem/showitem.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HeaderComponent,
    ProductsComponent,
    SearchPipe,
    ShowitemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
