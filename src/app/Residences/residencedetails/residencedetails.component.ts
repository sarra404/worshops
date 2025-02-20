import { Component } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { Residence } from 'src/core/models/Residence';
@Component({
  selector: 'app-residencedetails',
  templateUrl: './residencedetails.component.html',
  styleUrls: ['./residencedetails.component.css']
})
export class ResidencedetailsComponent {
id!:number;
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
  constructor(private ar:ActivatedRoute){
}
ngOnInit()
{//this.id=this.ar.snapshot.params['id']
  //console.log(this.id);
  this.ar.params.subscribe(params => {
    this.id=params['id'];
    console.log(this.id);
  })

};
}
