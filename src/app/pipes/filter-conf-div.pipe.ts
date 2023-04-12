import { Pipe, PipeTransform } from '@angular/core';
import { Team } from '../models';

@Pipe({
  name: 'filterConfDiv',
})
export class FilterConfDivPipe implements PipeTransform {
  transform(
    data: Partial<Team>[] | null,
    conference: string,
    division?: string
  ): Partial<Team>[] {
    let filtredData: Partial<Team>[] = data ?? [];
    if (conference?.length && conference !== 'null')
      filtredData = filtredData.filter(
        (_filtredElm: Partial<Team>) => _filtredElm.conference === conference
      );
    if (division?.length && division !== 'null')
      filtredData = filtredData.filter(
        (_filtredElm: Partial<Team>) => _filtredElm.division === division
      );
    return filtredData;
  }
}
