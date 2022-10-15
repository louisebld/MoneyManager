import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {NgModule} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { AdddepenseComponent } from '../adddepense/adddepense.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})

export class TopbarComponent implements OnInit {

  constructor(public dialog: MatDialog, private router : Router) {}

  ngOnInit(): void {
  }

  openDialog() {


    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(AdddepenseComponent, dialogConfig);
}

goAddDepenses(): void{
  this.router.navigateByUrl("/adddepenses");
}


}
