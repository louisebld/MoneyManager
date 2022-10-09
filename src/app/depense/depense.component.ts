import { Component, OnInit, Input } from '@angular/core';
import {Depense} from '../models/depense.model'

@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.scss']
})
export class DepenseComponent implements OnInit {

  @Input() depense!: Depense;

  constructor() { }

  ngOnInit(): void {
  }
}
