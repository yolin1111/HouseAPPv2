//import { Component } from '@angular/core'; //mark v1.13
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; //add v1.13
import { ActivatedRoute } from '@angular/router'; //add v1.13
import { HousingService } from '../housing.service'; //add v1.13
import { HousingLocation } from '../housinglocation'; //add v1.13

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule
  ],
  /* mark v1.13
  template: `
    <p>
      details works!
    </p>
  `,
  */
  template: `<p>details works! {{ housingLocationId }}</p>`,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  //add v1.13
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = -1;
  constructor() {
      this.housingLocationId = Number(this.route.snapshot.params['id']);
  }
}
