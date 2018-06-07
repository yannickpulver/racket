import { Pipe, PipeTransform } from '@angular/core';
import {Match} from "../models/Match";

@Pipe({
  name: 'matchbyid',
  pure: false
})
export class MatchPipe implements PipeTransform {
  transform(items: any[], filter: any): any {
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    var filtered = items.filter(item => item.key == filter);
    return filtered;
  }
}
