import {Component} from "@angular/core";
import {DataService} from "../app-data.service";
@Component({
    templateUrl: './app-worksheet.component.html'
})
export class WorksheetComponent {
    hostStyle = {
        top: '90px',
        bottom: '215px'
    };
    rowHeaderVisible = true;
    columnHeaderVisible = true;
    frozenRowCount = 3;
    frozenColumnCount = 2;
    frozenTrailingRowCount = 0;
    frozenTrailingColumnCount = 0;
    rowCount = 200;
    columnCount = 20;
    sheetTabColor = '#61E6E6';
    forzenlineColor = '#000000';
    selectionBackColor = '#D0D0D0';
    selectionBorderColor = '#217346';
    data: any;
    autoGenerateColumns = false;

    constructor(private dataservice: DataService) {
        this.data = dataservice.getPersonAddressData();
    }
}
