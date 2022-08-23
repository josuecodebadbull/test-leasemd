import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavMenuComponent } from 'src/app/components/nav-menu/nav-menu.component';
import { FormQuoterComponent } from 'src/app/components/form-quoter/form-quoter.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    HomeComponent,
    NavMenuComponent,
    FormQuoterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule
  ]
})
export class HomeModule { }
