import { Component, OnInit } from '@angular/core';
 
import { ChartType } from 'chart.js';
@Component({
  selector: 'app-page-statistique',
  templateUrl: './page-statistique.component.html',
  styleUrls: ['./page-statistique.component.scss']
})
export class PageStatistiqueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
      barChartType: ChartType = 'bar';
      pieChartType: ChartType = 'pie';
    // Variables pour stocker les statistiques
      totalEtudiants: number = 500;
      totalEnseignants: number = 50;
      totalClasses: number = 20;
 
   
  // Données du graphique en barres (étudiants par niveau)
  
  barChartData = {
    labels: ['Licence 1', 'Licence 2', 'Licence 3', 'Master 1', 'Master 2'],
    datasets: [
      {
        label: 'Étudiants',
        data: [120, 100, 90, 80, 50],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  };
  barChartOptions = {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  };

  // Données du graphique circulaire (enseignants par matière)
 
  pieChartData = {
    labels: ['Mathématiques', 'Physique', 'Informatique', 'Lettres'],
    datasets: [
      {
        data: [10, 15, 20, 5],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }
    ]
  };

}
