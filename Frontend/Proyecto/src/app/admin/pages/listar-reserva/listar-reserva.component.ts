import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';



@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.scss']
})
export class ListarReservaComponent implements OnInit {

  listReservas: Reserva[] = [];

   constructor(private _reservaService: ReservaService,
        private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.obtenerReserva();
  }


  obtenerReserva() {
    this._reservaService.getReservas().subscribe(data => {
      console.log(data);
      this.listReservas = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarReserva(id: any) {
    this._reservaService.eliminarReserva(id).subscribe(data => {
      this.toastr.error('La reserva fue eliminado con exito' ,'Reserva Eliminada');
      this.obtenerReserva();
    }, error => {
      console.log(error);
    })
  }

}
