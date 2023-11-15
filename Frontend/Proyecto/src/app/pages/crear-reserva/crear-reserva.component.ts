import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Reserva } from 'src/app/models/reserva'
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.scss']
})
export class CrearReservaComponent implements OnInit {

  reservaForm: FormGroup;
  titulo = 'Crear reserva';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _reservaService: ReservaService,
              private aRouter: ActivatedRoute) {

      this.reservaForm = this.fb.group({
        nombre: ['', Validators.required],
        apellidos: ['', Validators.required],
        telefono: ['', Validators.required],
        localidad: ['', Validators.required],
        direccion: ['', Validators.required],
        fecha: ['', Validators.required],
        hora: ['', Validators.required],
        metodoPago: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarReserva() {

    const RESERVA: Reserva = {
      nombre: this.reservaForm.get('nombre')?.value,
      apellidos: this.reservaForm.get('apellidos')?.value,
      telefono: this.reservaForm.get('telefono')?.value,
      localidad: this.reservaForm.get('localidad')?.value,
      direccion: this.reservaForm.get('direccion')?.value,
      fecha: this.reservaForm.get('fecha')?.value,
      hora: this.reservaForm.get('hora')?.value,
      metodoPago: this.reservaForm.get('metodoPago')?.value,
    }

    console.log(RESERVA);
      this._reservaService.guardarReserva(RESERVA).subscribe(data => {
        this.toastr.success('La reserva fue registrado con exito!', 'Reserva Registrada!');
        this.router.navigate(['/listar-reserva']);
      }, error => {
        console.log(error);
        this.reservaForm.reset();
      })

  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar reserva';
      this._reservaService.obtenerReserva(this.id).subscribe(data => {
        this.reservaForm.setValue({
          nombre: data.nombre,
          apellidos: data.apellidos,
          telefono: data.telefono,
          localidad: data.localidad,
          direccion: data.direccion,
          fecha: data.fecha,
          hora: data.hora,
          metodoPago: data.metodoPago,
        })
      })
    }
  }


}
