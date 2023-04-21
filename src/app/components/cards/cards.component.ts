import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  cardData = [
    {
      cardTitle: 'Storage',
      cardContent: '69.96%',
      cardSubText: '↓25.75%',
      footerText: 'vs previous 30 days',
    },
    {
      cardTitle: 'Revenue',
      cardContent: '$273.45',
      cardSubText: '↑$10.54',
      footerText: 'vs previous 30 days',
    },
    {
      cardTitle: 'Fixed Issues',
      cardContent: '42.25%',
      cardSubText: '↓12.98%',
      footerText: 'vs previous 30 days',
    },
    {
      cardTitle: 'Followers',
      cardContent: '356k',
      cardSubText: '↑3,459',
      footerText: 'vs previous 30 days',
    },
  ]
}
