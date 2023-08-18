/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router'; //add v1.12 導入路由文件
import routeConfig from './app/routes'; //add v1.12 導入路由文件

bootstrapApplication(AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(),
      provideRouter(routeConfig) //add v1.12 新增路由功能
    ]
  }
).catch(err => console.error(err));
