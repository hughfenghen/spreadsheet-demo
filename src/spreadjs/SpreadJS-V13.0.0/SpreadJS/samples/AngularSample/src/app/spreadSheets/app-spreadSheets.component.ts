import {Component} from "@angular/core";
import {DataService} from "../app-data.service";
@Component({
    templateUrl: './app-spreadSheets.component.html'
})
export class SpreadSheetsComponent {
    hostStyle = {
        top: '90px',
        bottom: '180px'
    };
    newTabVisible = true;
    tabStripVisible = true;
    tabStripRatio = true;
    tabNavigationVisible = true;
    scrollbarShowMax = true;
    scrollbarMaxAlign = true;
    showHorizontalScrollbar = true;
    showVerticalScrollbar = true;
    allowUserZoom = true;
    allowUserResize = true;
    spreadBackColor = '#FFFFFF';
    grayAreaBackColor = '#E4E4E4';
    data: any;
    autoGenerateColumns = false;

    constructor(private dataservice: DataService) {
        this.data = dataservice.getPersonAddressData();
    }
}