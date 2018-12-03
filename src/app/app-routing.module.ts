import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataflowComponent } from './components/dataflow/dataflow.component';
import { PrecessComponent } from './components/precess/precess.component';
import { LicenseComponent } from './components/license/license.component';
import { RestartComponent } from './components/restart/restart.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/dataflow', pathMatch: 'full'},
  {path: 'dataflow', component: DataflowComponent},
  {path: 'process', component: PrecessComponent},
  {path: 'license', component: LicenseComponent},
  {path: 'restart', component: RestartComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true  }
    )
  ],
})
export class AppRoutingModule { }
