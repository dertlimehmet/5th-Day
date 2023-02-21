import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUpperCase'
})
export class CustomUpperCasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    let text=value as string;
    return `@${text.toUpperCase()}`;
  }

}
