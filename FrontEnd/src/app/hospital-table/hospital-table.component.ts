import {Component} from '@angular/core';

/**
 * @title Table with sticky header
 */
@Component({
  selector: 'hospital-table',
  styleUrls: ['hospital-table.component.css'],
  templateUrl: 'hospital-table.component.html',
})
export class HospitalTableComponent {
  displayedColumns = ['id', "name", 'address', 'number_of_beds', 'occupation', 'lat', 'lng'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  id: string
  name:string
  address:string
  number_of_beds:string
  occupation:string
  location:{}
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
      "id": "750",
      "name": "Feil LLC",
      "location": {
          "lat": "-21.3238",
          "lng": "-123.7861"
      },
      "address": "94416 Kirlin Pass",
      "number_of_beds": "93",
      "occupation": "684"
  },
  {
      "id": "657",
      "name": "Kohler and Sons",
      "location": {
          "lat": "-19.1345",
          "lng": "108.0713"
      },
      "address": "1363 Douglas Common",
      "number_of_beds": "550",
      "occupation": "679"
  },
  {
      "id": "572",
      "name": "Pfeffer, Wiza and Vandervort",
      "location": {
          "lat": "-13.2974",
          "lng": "-51.5834"
      },
      "address": "08747 Abdullah Groves",
      "number_of_beds": "821",
      "occupation": "666"
  },
  {
      "id": "125",
      "name": "McCullough Group",
      "location": {
          "lat": "-63.0292",
          "lng": "178.9899"
      },
      "address": "3293 Runolfsdottir Inlet",
      "number_of_beds": "908",
      "occupation": "474"
  },
  {
      "id": "585",
      "name": "Beier, Rogahn and Okuneva",
      "location": {
          "lat": "-7.6059",
          "lng": "156.2744"
      },
      "address": "32913 Lang Park",
      "number_of_beds": "888",
      "occupation": "625"
  },
  {
      "id": "956",
      "name": "Batz - Waelchi",
      "location": {
          "lat": "-70.9842",
          "lng": "18.5462"
      },
      "address": "0110 Patrick Falls",
      "number_of_beds": "967",
      "occupation": "616"
  },
  {
      "id": "899",
      "name": "Nienow - Bailey",
      "location": {
          "lat": "42.5297",
          "lng": "15.6244"
      },
      "address": "29219 Erdman Stravenue",
      "number_of_beds": "556",
      "occupation": "150"
  },
  {
      "id": "925",
      "name": "Roob Inc",
      "location": {
          "lat": "-4.4426",
          "lng": "-98.5230"
      },
      "address": "922 Lucienne Drive",
      "number_of_beds": "964",
      "occupation": "319"
  },
  {
      "id": "173",
      "name": "Hane and Sons",
      "location": {
          "lat": "20.9554",
          "lng": "51.4397"
      },
      "address": "9157 Kiel Rest",
      "number_of_beds": "730",
      "occupation": "982"
  },
  {
      "id": "113",
      "name": "Rutherford, Zieme and Corkery",
      "location": {
          "lat": "-40.1983",
          "lng": "177.3474"
      },
      "address": "3147 D'Amore View",
      "number_of_beds": "197",
      "occupation": "880"
  },
  {
      "id": "223",
      "name": "Schoen - Schmeler",
      "location": {
          "lat": "86.6539",
          "lng": "140.7874"
      },
      "address": "519 Price Plaza",
      "number_of_beds": "448",
      "occupation": "641"
  },
  {
      "id": "122",
      "name": "Medhurst, Boehm and Lebsack",
      "location": {
          "lat": "50.7512",
          "lng": "-152.4075"
      },
      "address": "7914 Cornell Ville",
      "number_of_beds": "568",
      "occupation": "808"
  },
  {
      "id": "69",
      "name": "Legros, Swaniawski and Gusikowski",
      "location": {
          "lat": "73.9462",
          "lng": "-58.2566"
      },
      "address": "8158 Lowe Fields",
      "number_of_beds": "450",
      "occupation": "803"
  },
  {
      "id": "553",
      "name": "Carroll, Vandervort and Parisian",
      "location": {
          "lat": "50.2140",
          "lng": "-141.0829"
      },
      "address": "1366 Omer Way",
      "number_of_beds": "354",
      "occupation": "328"
  },
  {
      "id": "741",
      "name": "Schaefer, Collier and Mertz",
      "location": {
          "lat": "64.9079",
          "lng": "4.5133"
      },
      "address": "149 Dickinson Valleys",
      "number_of_beds": "817",
      "occupation": "97"
  },
  {
      "id": "379",
      "name": "McDermott - Stroman",
      "location": {
          "lat": "-47.8585",
          "lng": "-16.2863"
      },
      "address": "035 Marilou Bypass",
      "number_of_beds": "795",
      "occupation": "716"
  },
  {
      "id": "732",
      "name": "Pouros, Schulist and Batz",
      "location": {
          "lat": "-40.5794",
          "lng": "-54.9241"
      },
      "address": "93303 Sven Greens",
      "number_of_beds": "516",
      "occupation": "282"
  },
  {
      "id": "172",
      "name": "Reynolds - Lehner",
      "location": {
          "lat": "63.9783",
          "lng": "-36.7774"
      },
      "address": "211 Hassan Lake",
      "number_of_beds": "158",
      "occupation": "450"
  }
]