import { Component } from '@angular/core';

@Component({
  selector: 'app-salary-table',
  templateUrl: './salary-table.component.html',
  styleUrls: ['./salary-table.component.scss']
})
export class SalaryTableComponent {
  employeesData : {
    imgUrl: string,
    name: string,
    jobTitle: string,
    salary: number,
    sched: string,
    status: string,
    time_status: string }[] = [

    {
      imgUrl: '../../../assets/emp1.jpg',
      name: 'Ronny Asmo',
      jobTitle: 'Software engineer',
      salary: 110987,
      sched: 'full time',
      status: 'test period',
      time_status: '2 months'
    },
    {
      imgUrl: '../../../assets/emp2.jpg',
      name: 'Tomas Longsetteig',
      jobTitle: 'Business analyst',
      salary: 100345,
      sched: 'full time',
      status: 'test period',
      time_status: '1.5 months'
    },
    {
      imgUrl: '../../../assets/emp3.jpg',
      name: 'Kathrine Longsetteig',
      jobTitle: 'Project manager',
      salary: 130368,
      sched: 'full time',
      status: 'test period',
      time_status: '1 years'
    },

    {
      imgUrl: '../../../assets/emp5.jpg',
      name: 'Simon Ng',
      jobTitle: 'Support manager',
      salary: 75983,
      sched: 'full time',
      status: 'worker',
      time_status: '2 years'
    },
    {
      imgUrl: '../../../assets/emp6.jpg',
      name: 'Arne Opheim',
      jobTitle: 'Research Engineer',
      salary: 89147,
      sched: 'part time',
      status: 'worker',
      time_status: '1.5 years'
    },
  ]
}
