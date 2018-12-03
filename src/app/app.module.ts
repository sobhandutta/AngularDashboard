import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { DataflowComponent } from './components/dataflow/dataflow.component';
import { PrecessComponent } from './components/precess/precess.component';
import { LicenseComponent } from './components/license/license.component';

import { Globals } from './global';
import { AppRoutingModule } from './/app-routing.module';
import { BarchartComponent } from './components/shared/barchart/barchart.component';
import { RestartComponent } from './components/restart/restart.component';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';

const appRoutes: Routes = [
  {path: '', redirectTo: '/dataflow', pathMatch: 'full'},
  {path: 'dataflow', component: DataflowComponent},
  {path: 'process', component: PrecessComponent},
  {path: 'license', component: LicenseComponent},
  {path: 'restart', component: RestartComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DataflowComponent,
    PrecessComponent,
    BarchartComponent,
    LicenseComponent,
    RestartComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
