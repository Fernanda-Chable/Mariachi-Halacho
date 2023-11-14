import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.component.html',
  styleUrls: ['./inicio-admin.component.scss']
})
export class InicioAdminComponent {
 // Definición de la función getBodyClass()
 getBodyClass() {
  // Lógica para obtener la clase del body
  return 'clase-body'; // Reemplaza 'clase-body' con la clase que quieras aplicar dinámicamente
}

}
