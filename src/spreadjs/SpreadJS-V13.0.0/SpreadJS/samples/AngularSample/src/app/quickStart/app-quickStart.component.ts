import {Component} from "@angular/core";
import {DataService} from "../app-data.service";
@Component({
    templateUrl: './app-quickStart.component.html'
})
export class QuickStartComponent {
    spreadBackColor = 'aliceblue';
    sheetName = 'Person Address';
    hostStyle = {
        top: '200px',
        bottom: '10px'
    };
    data: any;
    autoGenerateColumns = false;

    constructor(private dataservice: DataService) {
        this.data = dataservice.getPersonAddressData();
    }
}
