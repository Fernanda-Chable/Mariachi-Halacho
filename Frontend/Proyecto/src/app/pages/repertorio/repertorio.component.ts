import { Component } from '@angular/core';

@Component({
  selector: 'app-repertorio',
  templateUrl: './repertorio.component.html',
  styleUrls: ['./repertorio.component.scss']
})
export class RepertorioComponent {
  searchText: string = '';
  songs: string[] = [
    'A La Sombra De Mamá',
    'Abuela',
    'A Esa Mujer',
    'Amor Eterno',
    'Aunque No Sea Mayo',
    'Clavitos con Amor',
    'Canto A la madre',
    'Dulce Hogar',
    'Entre El Amor Y YO',
    'Es La Mujer',
    'El Camino De La Vida',
    'Es Mi Madre',
    'En mi vida',
    'Los Caminos De La Vida',
    'La Nieve De Los Años',
    'Mama',
    'Motivos',
    'Madrecita Ideal',
    'Mama Vieja',
    'Madre del Corazon'

    // Agrega más canciones aquí
  ];
  songs2: string[] = [
    'Amigo',
    'A Mis Amigos',
    'Bohemio De Afición',
    'Camino Al Cielo',
    'Cuando Yo Quería Ser Grande',
    'Dulce Hogar',
    'El Aventurero',
    'El Bravero',
    'El Camino De La Vida',
    'El Hijo Desobediente',
    'El Hijo Del Pueblo',
    'El Hombre Que Más Te Amo',
    'El Rey',
    'La Ley De La Vida',
    'La Nieve De Los Años',
    'Mi Querido Cascarrabias',
    'Mi Querido Mi Viejo Mi Amigo',
    'Mi Vejez',
    'Mi Viejo',

    // Agrega más canciones aquí
  ];
  songs3: string[] = [
    'Amigo Roberto Carlos',
    'El Camino De La Vida',
    'En Vida',
    'En Tu Día',
    'Happy Birthday',
    'La Nieve De Los Años',
    'Los Caminos De La Vida',
    'Nochecitas Mexicanas',
    'Las Mañanitas Rey David',
    'Las Mañanitas Mexicanas',
    'Por Tu Cumpleaños',
    'Sabes Una Cosa',
    'En Tu Cumpleaños',
    'Un Año Más',
  ];
  songs4: string[] = [
    'La Mano de Dios',
    'Las Llaves De Mi Alma',
    'La Venia Bendita',
    'Madrigal',
    'Mi Forma de Sentir',
    'Mujeres Divinas',
    'Malagueña',
    'Más Que Tu Amigo',
    'Mátalas',
    'Motivos',
    'Nuestro Juramento',
    'Nos Estorbo La Ropa',
    'Novia Mia',
    'Obsesion',
    'Para Siempre',
    'Piel De Niña',
    'Paloma Querida',
    'Parece Que Fue Ayer',
    'Toda Una Vida',
    'Paso a La Reina',
    'Que Se Mueran De Envidia',
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
