import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { NgChartsModule } from 'ng2-charts'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { SalaryTableComponent } from './components/salary-table/salary-table.component'
import { CardsComponent } from './components/cards/cards.component';
import { ChartsComponent } from './components/charts/charts.component';
import { TableComponent } from './pages/table/table.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FormsComponent } from './pages/forms/forms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    NavbarComponent,
    TableComponent,
    CalendarComponent,
    FormsComponent,
    CardsComponent,
    ChartsComponent,
    SalaryTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    NgChartsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
