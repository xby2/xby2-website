import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Value } from '../model/value';
import { ValueService } from '../service/value.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ValuesResolver implements Resolve<Value[]> {
  constructor(private valueService: ValueService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Value[] | Observable<Value[]> |
                                                     Promise<Value[]> {
    return this.valueService.getValues();
  }
}
