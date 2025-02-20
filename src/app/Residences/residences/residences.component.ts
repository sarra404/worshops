import { Component } from '@angular/core';
import { Residence } from 'src/core/models/Residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/img/d2a6fca8489f68f86cb0b9cd80941a14.jpeg", status: "Disponible"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/img/d2a6fca8489f68f86cb0b9cd80941a14.jpeg", status:
    "Disponible" },
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/img/d2a6fca8489f68f86cb0b9cd80941a14.jpeg", status:
    "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu",
    "image":"../../assets/img/d2a6fca8489f68f86cb0b9cd80941a14.jpeg", status: "En Construction"}
    ];
    favorites: any[] = []; // Liste des favoris

    searchTerm: string = '';
    toggleFavorite(residence: any) {
      if (this.isFavorite(residence)) {
        this.favorites = this.favorites.filter(fav => fav !== residence);
      } else {
        this.favorites.push(residence);
      }
    }

    isFavorite(residence: any): boolean {
      return this.favorites.includes(residence);
    }
    filteredResidences() {
      return this.listResidences.filter(r =>
        r.address.toLowerCase().includes(this.searchTerm.toLowerCase())
      );

}
}
