import {NgModule}      from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent}  from "./app.component";
import {AppRoutingModule} from "./route/app-routing.module";
import {QuickStartComponent} from "./quickStart/app-quickStart.component";
import {SpreadSheetsComponent} from "./spreadSheets/app-spreadSheets.component";
import {WorksheetComponent} from "./worksheet/app-worksheet.component";
import {ColumnComponent} from "./column/app-column.component";
import {DataBindComponent} from "./dataBind/app-dataBind.component";
import { SpreadSheetsModule } from "@grapecity/spread-sheets-angular";
import {FormsModule} from "@angular/forms";
import {ToNumberPipe} from "./app.component.toNumberPipe";
import {StyleComponent} from "./style/app-style.component";
import {OutlineComponent} from "./outline/app-outline.component";
import {DataService} from "./app-data.service";


@NgModule({
    imports: [BrowserModule, AppRoutingModule, SpreadSheetsModule, FormsModule],
    declarations: [
        AppComponent,
        QuickStartComponent,
        SpreadSheetsComponent,
        WorksheetComponent,
        ColumnComponent,
        DataBindComponent,
        StyleComponent,
        OutlineComponent,
        ToNumberPipe
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
