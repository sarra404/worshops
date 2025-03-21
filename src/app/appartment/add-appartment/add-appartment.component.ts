import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apartment } from 'src/core/models/Appartement';


@Component({
  selector: 'app-add-appartment',
  templateUrl: './add-appartment.component.html',
  styleUrls: ['./add-appartment.component.css']
})
export class AddAppartmentComponent {
  newApart!: Apartment;

  AddApart = new FormGroup({
  apartNum: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
  floorNum: new FormControl('', [Validators.required, Validators.min(2), Validators.pattern('^[0-9]+$')]),
  surface:new FormControl('',Validators.required),
  terrace:new FormControl('yes',Validators.required),
  surfaceterrace: new FormControl({ value: '', disabled: false }, Validators.required),
  category:new FormControl('S+1',Validators.required),
  ResidenceId:new FormControl('',Validators.required)
});

onTerraceChange() {
  if (this.AddApart.get('terrace')?.value === 'yes') {
    this.AddApart.get('surfaceterrace')?.enable();
  } else {
    this.AddApart.get('surfaceterrace')?.disable();
    this.AddApart.get('surfaceterrace')?.setValue('');
  }
}

onSubmit() {
  if (this.AddApart.valid) {
    this.newApart = {
      apartNum: Number(this.AddApart.get('apartNum')?.value),
      floorNum: Number(this.AddApart.get('floorNum')?.value),
      surface: Number(this.AddApart.get('surface')?.value),
      terrace: this.AddApart.get('terrace')?.value === 'yes',
      surfaceterrace: this.AddApart.get('surfaceterrace')?.value ? Number(this.AddApart.get('surfaceterrace')?.value) : 0,
      category: this.AddApart.get('category')?.value || '',
      ResidenceId: Number(this.AddApart.get('ResidenceId')?.value),
    };

    console.log('New Apartment:', this.newApart);
  }
}

resetForm() {
  this.AddApart.reset({
    apartNum: '',
    floorNum: '',
    surface: '',
    terrace: 'yes',
    surfaceterrace: '',
    category: 'S+1',
    ResidenceId: ''
  });
  this.onTerraceChange();
}

}
