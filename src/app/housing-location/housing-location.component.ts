//import { Component } from '@angular/core';
import { Component, Input } from '@angular/core';//mark v1.09
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation'; //add v1.09
import { RouterModule } from '@angular/router'; //add v1.13

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule //add v1.13
  ],
  /* mark v1.09
  template: `
    <p>
      housing-location works!
    </p>
  `,
  */
  /* mark v1.13
    template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
    </section>
    `,
    */
  template: `
<section class="listing">
  <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
  <h2 class="listing-heading">{{ housingLocation.name }}</h2>
  <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
  <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
</section>
`,

  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation; //add v1.09 驚嘆號功能為告訴TypeScript 編譯器該屬性的值不會為空或未定義
}
