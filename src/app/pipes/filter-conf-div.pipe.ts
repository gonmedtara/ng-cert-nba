import { Pipe, PipeTransform } from '@angular/core';
import { Team } from '../models';

@Pipe({
  name: 'filterConfDiv'
})
export class FilterConfDivPipe implements PipeTransform {

  transform(data: Partial<Team>[] | null, conference: string, division?: string): Partial<Team>[] {
    let filtredData: Partial<Team>[] = data ?? [];
    if (conference?.length) filtredData = filtredData.filter((_filtredElm: Partial<Team>) => _filtredElm.conference === conference || !_filtredElm.conference?.length);
    if (division?.length) filtredData = filtredData.filter((_filtredElm: Partial<Team>) => _filtredElm.division === division || !_filtredElm.division?.length);
    return filtredData;
  }

}
