import {Component} from '@angular/core';
import '@grapecity/spread-sheets-resources-zh';
import * as GC from '@grapecity/spread-sheets';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    appHeader = 'SpreadJS Angular 示例';
    appFooter = 'Copyright© GrapeCity, inc. All Rights Reserved.';
    constructor () {
        GC.Spread.Common.CultureManager.culture("zh-cn");
    }
}
