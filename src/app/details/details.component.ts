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
  //template: `<p>details works! {{ housingLocationId }}</p>`, //mark v1.14
  template: `
  <article>
    <img class="listing-photo" [src]="housingLocation?.photo"
      alt="Exterior photo of {{housingLocation?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{housingLocation?.availableUnits}}</li>
        <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
        <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
      </ul>
    </section>
  </article>
`,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  //add v1.13
  /*mark v1.14
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = -1;
  constructor() {
      this.housingLocationId = Number(this.route.snapshot.params['id']);
  }
  */
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
}
