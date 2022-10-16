import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Depense } from '../models/depense.model';

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
  

  constructor(private formBuilder : FormBuilder) { }

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

  onSubmitForm() : void{
    console.log(this.depenseForm.value);
  }
}
