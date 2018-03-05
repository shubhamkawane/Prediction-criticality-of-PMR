import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { Browser } from 'protractor';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MatMenuModule, MatCardModule, MatIconModule, MatSidenavModule } from "@angular/material";
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select'
import {GetDataService} from './get-data.service';
import { HttpModule } from '@angular/http'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule
  ],

  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
