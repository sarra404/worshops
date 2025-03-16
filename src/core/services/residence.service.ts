import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Residence } from '../models/Residence';

//dol eli l fichier mtei service partage injectable
@Injectable({
  providedIn: 'root' //l app kolha andha visibilite aal service
})
export class ResidenceService {
residenceUrl="http://localhost:3000/Residences"

  constructor(private http: HttpClient) { }
  getResidences()
  {return this.http.get<Residence[]>(this.residenceUrl);

  }
  addResidence(residence: Residence)
  {
    return this.http.post<Residence>(this.residenceUrl,residence);
  }

}
