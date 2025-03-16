import { Component } from '@angular/core';
import { Residence } from 'src/core/models/Residence';
import { ResidenceService } from 'src/core/services/residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences:Residence[]=[];
  constructor(private Rs: ResidenceService){}
  
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
