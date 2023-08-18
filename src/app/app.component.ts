import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'; //add v1.03
import { RouterModule } from '@angular/router'; //add v1.12 導入路由文件

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent, //add v1.03
    RouterModule, //add v1.12 導入路由
  ],
  //template: `<h1>Hello World</h1>`, //mark v1.03
  /* mark v1.12
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,
 */

template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
