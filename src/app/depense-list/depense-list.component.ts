import { Component, OnInit } from '@angular/core';
import {Depense} from '../models/depense.model';
import {DepensesService} from '../services/depenses.service';
@Component({
  selector: 'app-depense-list',
  templateUrl: './depense-list.component.html',
  styleUrls: ['./depense-list.component.scss']
})
export class depenseListComponent implements OnInit {

  constructor(private depensesService : DepensesService) { }

  depenses!: Depense[];

  ngOnInit(): void {
    this.depenses = this.depensesService.getAllDepenses();
  }

}
