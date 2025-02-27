import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }  from '@angular/router';
import { Residence } from 'src/core/models/Residence';
@Component({
  selector: 'app-residencedetails',
  templateUrl: './residencedetails.component.html',
  styleUrls: ['./residencedetails.component.css']
})
export class ResidencedetailsComponent {
id!:number;
residence!: Residence | undefined;
    listResidences: Residence[] = [
      { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/img/d2a6fca8489f68f86cb0b9cd80941a14.jpeg", status: "Disponible" },
      { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/img/d2a6fca8489f68f86cb0b9cd80941a14.jpeg", status: "Disponible" },
      { id: 3, name: "El Arij", address: "Rades", image: "../../assets/img/d2a6fca8489f68f86cb0b9cd80941a14.jpeg", status: "Vendu" },
      { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/img/d2a6fca8489f68f86cb0b9cd80941a14.jpeg", status: "En Construction" }
    ];

  constructor(private ar:ActivatedRoute, private router: Router){
}
ngOnInit()
{//this.id=this.ar.snapshot.params['id']
  //console.log(this.id);
  this.ar.params.subscribe(params => {
    this.id=+params['id'];
    console.log(this.id);
    this.residence = this.listResidences.find(res => res.id === this.id);
    //this.residence = this.listResidences.find(res => res.id === parseInt(this.id));

  })

};
nextResidence() {
  const currentIndex = this.listResidences.findIndex(res => res.id === this.id);
  if (currentIndex !== -1 && currentIndex < this.listResidences.length - 1) {
    const nextId = this.listResidences[currentIndex + 1].id;
    this.router.navigate(['/details', nextId]);
  }
}
}


