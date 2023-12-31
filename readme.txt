/************************************************************************************************
   Description:練習Angular
   HISTORY
   Date         Authur      Version   Description
   ----------   ---------   -------   -------------------------------------------------------------
   2023/08/18   Yolin.Chen   v1.01    建立專案
                             v1.02    建立HomeComponent，ng generate component home --standalone --inline-template --skip-tests
                             v1.03    將HomeComponent加到主畫面
                             v1.04    加入一個搜尋欄位、按鈕，加入CSS
                             v1.05    建立HousingLocationComponent，ng g c housingLocation --standalone --inline-template --skip-tests
                             v1.06    將HousingLocationComponent加到HomeComponent內，並先顯示Work
                             v1.07    預先加入CSS在HousingLocationComponent
                             v1.08    建立ng g interface housinglocation (有雷注意，指令都是小寫，但是Interface卻是建立開頭大寫 Housinglocation)
                                      修改 interface 為 HousingLocation
                                      加入 interface 欄位
                             v1.09    目前理解
                                      1.資料定義於HomeComponent 讓 HousingLocationComponent 讀取
                                      2.透過 @Input()
                             v1.10    利用*ngFor 動態讀取數據
                             v1.11    建立 ng g service housing --skip-tests
                                      觀念將service資料注入(inject)到HomeComponent
                             v1.12    新增DetailsComponent，ng g c details --standalone --inline-template --skip-tests
                                      導入路由功能 當手動輸入 http://localhost:4200/details/3 會切換 DetailsComponent
                             v1.13    點選後路由動態變換，並顯示 details works! 3
                             v1.14    客製化 DetailsComponent
                             v1.15    切換到 DetailsComponent後，點選Home圖案要返回
                                      AppComponent 程式碼已經修正這行造成 <a [routerLink]="['/']">
                             v1.16    在DetailsComponent加入表單功能，並輸出到Chrome控制台
                             v1.17    加入搜尋功能(目前只有搜尋按紐)
                             v1.18    啟動Json Server，讓資料來自另外一台伺服器
                                      將圖片下載到assets資料夾
                                      安裝 npm install -g json-server
                                      啟動 json-server --watch db.json
  ************************************************************************************************/

建立觀念
1.執行npn install會使用package.json的設定，產生node_modules資料夾
2.npm audit 可以查看目前套件狀況，看起來有些套件已經不支援或者有風險
3.ng serve 啟動伺服器
4.今天才知道ng 是Angular的縮寫

資料夾介紹(/src)
index.html是應用程序的頂級 HTML 模板。
style.css是應用程序的頂級樣式表。
main.ts是應用程序開始運行的地方。
favicon.ico是應用程序的圖標，就像您在任何網站中看到的一樣。


component介紹(/app)
app.component.ts是描述組件的源文件app-root。這是應用程序中的頂級 Angular 組件。組件是 Angular 應用程序的基本構建塊。組件描述包括組件的代碼、HTML 模板和样式，這些可以在此文件中進行描述，也可以在單獨的文件中進行描述。
在此應用程序中，樣式位於單獨的文件中，而組件的代碼和 HTML 模板位於該文件中。
app.component.css是該組件的樣式表。
新組件將添加到此目錄中。

圖片(/asset)

其他文件
.angular具有構建 Angular 應用程序所需的文件。
.e2e有用於測試應用程序的文件。
.node_modules具有應用程序使用的node.js 包。
angular.json向應用程序構建工具描述 Angular 應用程序。
package.json由npm（節點包管理器）用來運行完成的應用程序。
tsconfig.*是向 TypeScript 編譯器描述應用程序配置的文件。

component
selector：描述 Angular 如何引用模板中的組件。
standalone：描述組件是否需要NgModule.
imports：描述組件的依賴關係。
template：描述組件的 HTML 標記和佈局。
styleUrls：以數組形式列出組件使用的 CSS 文件的 URL。


建立 HomeComponent
ng generate component home --standalone --inline-template --skip-tests
--standalone 就可以在 Component 使用 imports 來引入其他的 Dependency，像是 Directive、Pipe、Component 等等。此外 imports 也可以引入其他的 NgModule。
--inline-template 感覺建立後就能與CSS或templete有關聯
--skip-tests 當專案建立後，不增加單元測試檔案
先到這個發現越找問題越多


Git 如何刪除一個已經push到remote端的commit
git reset --hard HEAD~1
git push --force
記得Fetch & Refresh 確認已回到前一個commit
