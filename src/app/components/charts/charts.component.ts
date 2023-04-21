import { Component } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {
    chartData = [
    {
      labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'],
      datasets:[
        {
        data: [10, 40, 25, 75, 90, 85, 98],
        label: 'Daily Sales',
        backgroundColor: 'brown',
        borderColor: 'black',
        fill: true
        }
      ],
      type: 'line'
    },
    {
      labels: ['Sept 2023', 'Oct', 'Nov', 'Dec', 'Jan 2024', 'Feb'],
      datasets:[
        {
        data: [10, 45, 20, 75, 60, 90],
        label: 'E-mail Subscription',
        backgroundColor: 'brown',
        borderColor: 'black',
        borderRadius: 30
        }
      ],
      type: 'bar'
    },
    {
      labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
      datasets:[
        {
        data: [5, 13, 10, 25, 14, 30],
        label: 'Completed Task',
        backgroundColor: 'brown',
        borderColor: 'black',
        tension: 0.5
        }
      ],
      type: 'line'
    }
  ]
}
