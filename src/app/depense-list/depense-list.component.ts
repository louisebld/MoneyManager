import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, take, takeUntil, tap } from 'rxjs';
import {Depense} from '../models/depense.model';
import {DepensesService} from '../services/depenses.service';
@Component({
  selector: 'app-depense-list',
  templateUrl: './depense-list.component.html',
  styleUrls: ['./depense-list.component.scss']
})
export class depenseListComponent implements OnInit, OnDestroy {

  constructor(private depensesService : DepensesService) { }


  depenses$!: Observable<Depense[]>;
  private destroy$! : Subject<boolean>;

  ngOnInit(): void {
    this.depenses$ = this.depensesService.getAllDepenses();
    // this.destroy$ = new Subject<boolean>();

    // interval(1000).pipe(
    //     tap(console.log),
    //     takeUntil(this.destroy$)
    // ).subscribe();
    
  }

  ngOnDestroy(): void {
    // this.destroy$.next(true);  
  }

}
