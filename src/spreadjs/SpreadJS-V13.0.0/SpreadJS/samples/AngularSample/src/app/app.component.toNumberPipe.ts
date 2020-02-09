import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name: 'toNumber'})
export class ToNumberPipe implements PipeTransform {
    transform(value: string): number {
        if (value) {
            return parseInt(value);
        }
    }
}