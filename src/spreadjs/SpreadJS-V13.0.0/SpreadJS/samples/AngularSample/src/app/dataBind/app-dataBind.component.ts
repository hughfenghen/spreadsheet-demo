import {Component} from "@angular/core";
import {DataService} from "../app-data.service";
@Component({
    templateUrl: './app-dataBind.component.html'
})
export class DataBindComponent {
    hostStyle = {
        top: '90px',
        bottom: '0px'
    };
    data: any;
    autoGenerateColumns = false;

    constructor(private dataService: DataService) {
        this.data = dataService.getAirpotsData();
    }
}
