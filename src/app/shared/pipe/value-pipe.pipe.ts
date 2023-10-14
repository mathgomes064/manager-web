import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valuePipe'
})
export class ValuePipe implements PipeTransform {

  transform(value: number, currencyCode: string = 'BRL', locale: string = 'pt-BR'): string {
    if (value == null) return '';

    return value.toLocaleString(locale, { style: 'currency', currency: currencyCode });
  }

}