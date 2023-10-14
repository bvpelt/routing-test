import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PermlinkComponent } from './permlink/permlink.component';
import { SecondComponent } from './second/second.component';
import { ChildaComponent } from './second/childa/childa.component';
import { ChildbComponent } from './second/childb/childb.component';
import { LogService } from './services/logging/log.service';
import { LogpublishersService } from './services/logging/logpublishers.service';
import { LogdataComponent } from './logdata/logdata.component';
import { LogWebApi } from './services/logging/logwebapi.class';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    FirstComponent,
    SecondComponent,
    ChildaComponent,
    ChildbComponent,
    PermlinkComponent,
    LogdataComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LogService, LogpublishersService, LogWebApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
