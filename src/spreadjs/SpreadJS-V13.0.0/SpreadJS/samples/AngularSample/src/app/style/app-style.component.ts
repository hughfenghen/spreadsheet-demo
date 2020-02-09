import {Component} from "@angular/core"
import {DataService} from "../app-data.service"
import * as GC from "@grapecity/spread-sheets"

@Component({
    templateUrl: './app-style.component.html'
})
export class StyleComponent {
    hostStyle = {
        top: '90px',
        bottom: '0px'
    };
    checkBoxCellType = new GC.Spread.Sheets.CellTypes.CheckBox();
    hyperLinkCelleType = new GC.Spread.Sheets.CellTypes.HyperLink();
    comboBoxCellType = new GC.Spread.Sheets.CellTypes.ComboBox();
    style = new GC.Spread.Sheets.Style();
    data: any;
    autoGenerateColumns = false;

    constructor(private dataService: DataService) {
        this.data = dataService.getEmployeesData();
        this.comboBoxCellType.items([
            {text: 'US', value: 'US'},
            {text: 'UK', value: 'UK'},
            {text: 'Germany', value: 'Germany'},
            {text: 'Maxico', value: 'Maxico'}]);
        this.style.backColor = 'lightgray';
    }
}
