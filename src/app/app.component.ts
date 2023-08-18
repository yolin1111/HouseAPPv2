import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'; //add v1.03

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent, //add v1.03
  ],
  //template: `<h1>Hello World</h1>`, //mark v1.03
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`, //add v1.03
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
