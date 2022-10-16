import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { Depense } from '../models/depense.model';
import { DepensesService } from '../services/depenses.service';

@Component({
  selector: 'app-adddepense',
  templateUrl: './adddepense.component.html',
  styleUrls: ['./adddepense.component.scss']
})
export class AdddepenseComponent implements OnInit {

  userEmail!: string;
  nameDepense!: string;
  depenseForm!:FormGroup;
  categories! : string[];

  depensePreview$! : Observable<Depense>;
  

  constructor(private formBuilder : FormBuilder, private depenseService : DepensesService,
    private router : Router) { }

  ngOnInit(): void {
    this.depenseForm = this.formBuilder.group({
      name: [null],
      date: [null],
      prix: [null],
      categorie: [null]
    })
    this.categories = ['Alimentation', 'Transport', 'Loisir', 'Autre'];
    this.depensePreview$ = this.depenseForm.valueChanges.pipe(
      map((formValue => ({
        ...formValue,
        name: formValue.name,
        date: formValue.date,
        prix: formValue.prix,
        categorie: formValue.categorie
      }))
    ));
  }

  onSubmitForm(){
    this.depenseService.addDepense(this.depenseForm.value).pipe(
      tap(() => this.router.navigateByUrl("/depenses"))
    ).subscribe();
    console.log(this.depenseForm.value);
  }
}
