import { Component } from '@angular/core';

@Component({
  selector: 'app-repertorio',
  templateUrl: './repertorio.component.html',
  styleUrls: ['./repertorio.component.scss']
})
export class RepertorioComponent {
  searchText: string = '';
  songs: string[] = [
    'Las Mañanitas',
    'Pelo Blanco',
    'Hermoso Cariño',
    'Cariñito',
    'Gema',
    'Reyna De Reynas',
    'Madrecita De Mi Alma',
    'Amor Eterno',
    'Señora, Señora',
    'Hasta Que Te Conoci',
    'En Tu Dia',
    '100 Años',
    'Motivos',
    'En Mi Vida',
    'Mujeres Divinas',
    'Cielito Lindo',
    'Mama',
    'Madrecita Ideal',
    'Mama Vieja',
    'Madre Del Corazon'

    // Agrega más canciones aquí
  ];
  songs2: string[] = [
    'El Rey',
    'Amigo',
    'Mi Querido Viejo',
    'Como Quisisera Ser Grande',
    'Volver, Volver',
    'Puño De Tierra',
    'El Aventurero',
    'El Hijo Desobediente',
    'Camino De Michoacan',
    'Sangre En Mi Cuerpo',
    'De Que Manera Te Olvido',
    'Aca Entre Nos',
    'Cumpleaños',
    'Por Tu Maldito Amor',
    'Triste Recuerdo',
    'Mi Querido Cascarrabias',
    'La Ley Del Monte',
    'Mi Viejo',
    'Mi Vejez',

    // Agrega más canciones aquí
  ];
  songs3: string[] = [
    'Felicidades',
    'Celebremos',
    'Mariachi Loco',
    'Mono De Alambre',
    'Guadalajara',
    'El Son De La Negra',
    'Jarabe Tapatio',
    'Pelea De Gallos',
    'Despacito',
    'El Noa Noa',
    'El Cable',
    'El Huitlacoche',
    'No se Va',
  ];
  songs4: string[] = [
    'Diseñame',
    'Tatuajes',
    'Si Nos Dejan',
    'La Media Vuelta',
    'Serenata Huasteca',
    'Mas Que Tu Amigo',
    'Amarte A La Antigua',
    'Para Que Me Haces Llorar',
    'Urge',
    'Matalas',
    'Un Millon De Primaveras',
    'Cielo Rojo',
    'Por Mujeres Como Tu',
    'Estos Celos',
    'Ella',
    'La Bikina',
    'Paloma Querida',
    'Fallaste Corazon',
    'Como Quien Pierda Una Estrella',
    'Sabes Una Cosa',
  ];
  isListExpanded: boolean = true;
  isListExpanded1: boolean = true;
  isListExpanded2: boolean = false;
  isListExpanded3: boolean = false;

  toggleList1() {
    this.isListExpanded = !this.isListExpanded;
  }

  toggleList2() {
    this.isListExpanded1 = !this.isListExpanded1;
  }
  toggleList3() {
    this.isListExpanded2 = !this.isListExpanded2;
  }
  toggleList4() {
    this.isListExpanded3  = !this.isListExpanded3 ;
  }

}
