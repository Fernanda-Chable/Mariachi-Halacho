import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOption } from '@fullcalendar/angular/private-types';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';
import { Calendar, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {
  @ViewChild('fullcalendar') fullcalendar: any;
  calendarPlugins = [dayGridPlugin];
  reservas: Reserva[] = [];

  constructor(private reservaService: ReservaService) { }

  ngOnInit(): void {
    this.obtenerReserva();
  }

  obtenerReserva(): void {
    this.reservaService.getReservas().subscribe(
      (reservas: Reserva[]) => {
        this.reservas = reservas;
        console.log('Reservas obtenidas:', this.reservas);
        this.agregarReservasAlCalendario();
      },
      (error) => {
        console.error('Error al obtener las reservas:', error);
      }
    );
  }

  agregarReservasAlCalendario(): void {
    const eventos: EventInput[] = this.reservas.map((reserva) => ({
      title: `${reserva.nombre} ${reserva.apellidos}`,
      start: reserva.fecha,
      end: reserva.fecha,
      allDay: true
    }));

    this.fullcalendar.getApi().addEventSource(eventos);
  }
}