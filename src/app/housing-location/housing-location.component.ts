//import { Component } from '@angular/core';
import { Component,Input } from '@angular/core';//mark v1.09
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation'; //add v1.09

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  /* mark v1.09
  template: `
    <p>
      housing-location works!
    </p>
  `,
  */
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
  </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation; //add v1.09 驚嘆號功能為告訴TypeScript 編譯器該屬性的值不會為空或未定義
}
