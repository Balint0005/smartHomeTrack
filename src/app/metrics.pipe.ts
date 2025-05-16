import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metrics'
})
export class MetricsPipe implements PipeTransform {

  transform(value: number, metric: string): string {
    switch (metric) {
      case "temp": return `${value} °C`;
      case "light": return `${value} lm`;
      default: return `${value}`;
    }
  }
}
