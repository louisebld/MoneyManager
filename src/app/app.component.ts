import { Component, OnInit } from '@angular/core';
import { Depense } from './models/depense.model';
import { MatSliderModule } from '@angular/material/slider';
import {NgModule} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'MoneyManager';
  depenses!: Depense[];

  ngOnInit(){
    this.depenses = [
      new Depense(1, 'Sac duffle bag', new Date(), 100, 'Bagages'),
      new Depense(2, 'Sac à dos', new Date(), 50, 'Bagages'),
      new Depense(3, 'Sac à main', new Date(), 30, 'Bagages'),
    ];
    }
  
}
