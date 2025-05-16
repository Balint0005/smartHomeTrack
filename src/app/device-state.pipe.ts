import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deviceState'
})
export class DeviceStatePipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1: return 'Kikapcsolva';
      case 2: return 'Bekapcsolva';
      default: return 'Hiba';
    }
  }
}
