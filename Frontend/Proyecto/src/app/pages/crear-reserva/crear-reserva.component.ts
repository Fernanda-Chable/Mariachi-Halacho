import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';
import { loadPayPalScript } from 'src/app/models/paypal-config';

declare var paypal: any;
@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.scss']
})

export class CrearReservaComponent implements OnInit  {

  reservaForm: FormGroup;
  titulo = 'Realiza tu reservacion';
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
    this.loadPayPalButtons();
    
  }
  
  loadPayPalButtons() {
    loadPayPalScript().then(() => {
      // El SDK de PayPal se ha cargado correctamente, puedes renderizar los botones de PayPal aquí
      paypal.Buttons({
        style: {
          color: 'blue',
          shape: 'pill',
          label: 'pay'
        },
        createOrder: this.createOrder.bind(this),
        onApprove: this.onApprove.bind(this)
      }).render('#paypal-button-container');
    }).catch(error => {
      // Manejar cualquier error de carga del SDK de PayPal aquí
      console.error('Error al cargar el SDK de PayPal:', error);
    });
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
// Función para crear una orden de PayPal
createOrder(data: any, actions: any) {

  const res = {
    total: 100 // Reemplaza esto con el total correcto de la reserva
  };

  return actions.order.create({
      purchase_units: [{
          amount: {
              value: res.total
          }
      }]
  });
}

// Función para procesar la aprobación de una transacción de PayPal
onApprove(data: any, actions: any) {
  return actions.order.capture().then(function(details: any) {
      alert('Transaction completed by ' + details.payer.name.given_name);
  });
}
}