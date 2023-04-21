import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TableComponent } from './pages/table/table.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FormsComponent } from './pages/forms/forms.component';

const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'profile', component: ProfileComponent},
  {path:'table-list', component: TableComponent},
  {path:'calendar', component: CalendarComponent},
  {path:'forms', component: FormsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
