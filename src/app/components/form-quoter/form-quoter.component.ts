import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Distribuidores } from 'src/app/config/interfaces/form-quoter';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-form-quoter',
  templateUrl: './form-quoter.component.html',
  styleUrls: ['./form-quoter.component.scss']
})
export class FormQuoterComponent implements OnInit {

  quoterForm: FormGroup;

  distribuidores: Distribuidores[] = [];


  constructor(
    private fb: FormBuilder,
    private srv: FormularioService
  ) { }

  ngOnInit(): void {
    this.quoterForm = this.fb.group({
      'idDistribuidor': [null, Validators.required],
      'paginaAuto': [null, [Validators.required, Validators.maxLength(64)]],
      'nombreCompleto': [null, [Validators.required, Validators.maxLength(64)]],
      'email': [null, [Validators.required, Validators.email, Validators.maxLength(64)]]
    });
    // this.obtenerDistribuidores();
  }

  obtenerDistribuidores() {
    this.srv.getDistribuidores().subscribe((resp: any) => {
      const { distribuidores } = resp;
      this.distribuidores = distribuidores;
    })
  }

  nuevaCotizacion() {
    this.quoterForm.markAllAsTouched();
    if (!this.quoterForm.valid) return;
  }

}
