import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {NgModule} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { AdddepenseComponent } from '../adddepense/adddepense.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})

export class TopbarComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog() {


    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(AdddepenseComponent, dialogConfig);
}

}
