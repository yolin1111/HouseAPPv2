import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component'; //add v1.06
import { HousingLocation } from '../housinglocation'; //add v1.09

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent //v1.06
  ],
  /* mark v1.04
  template: `
    <p>
      home works!
    </p>
  `,
  */
 /* mark v1.06
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
`,
*/
/* mark v1.09
template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-housing-location></app-housing-location>
  </section>
  `,
  */
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
  <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
  </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //add v1.09
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
