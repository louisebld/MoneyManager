import { Component, OnInit } from '@angular/core';
import { Depense } from './models/depense.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MoneyManager';

  myDepense!: Depense;
  ngOnInit(){
    this.myDepense = new Depense(1, 'Sac duffle bag', new Date(), 100, 'Bagages');
  }
}
