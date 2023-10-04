import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildaComponent } from './second/childa/childa.component';
import { ChildbComponent } from './second/childb/childb.component';
import { LogService } from './services/logging/log.service';
import { LogpublishersService } from './services/logging/logpublishers.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    FirstComponent,
    SecondComponent,
    ChildaComponent,
    ChildbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LogService, LogpublishersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
