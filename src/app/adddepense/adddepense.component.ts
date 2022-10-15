import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adddepense',
  templateUrl: './adddepense.component.html',
  styleUrls: ['./adddepense.component.scss']
})
export class AdddepenseComponent implements OnInit {

  userEmail!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(form : NgForm) : void{
    console.log(form.value);
  }
}
