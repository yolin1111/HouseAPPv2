import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  /* mark v1.04
  template: `
    <p>
      home works!
    </p>
  `,
  */
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
