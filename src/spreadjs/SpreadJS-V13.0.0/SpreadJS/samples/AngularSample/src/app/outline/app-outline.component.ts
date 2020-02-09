import {Component} from "@angular/core"
import {DataService} from "../app-data.service";
@Component({
    templateUrl: './app-outline.component.html'
})
export class OutlineComponent {
    hostStyle = {
        top: '90px',
        bottom: '35px'
    };
    showRowOutline = true;
    showColumnOutline = true;
    rowOutlineInfo = [{index: 1, count: 4}, {index: 6, count: 4}];
    columnOutlineInfo = [{index: 0, count: 4}];
    data: any;
    autoGenerateColumns = false;

    constructor(private dataservice: DataService) {
        this.data = dataservice.getPersonAddressData();
    }
}