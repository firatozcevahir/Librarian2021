import { Pipe, PipeTransform } from '@angular/core';

import { RecordState } from '@app/shared/models/base.model';

@Pipe({
  name: 'enumpipe',
  pure: false,
})
export class GlobalEnumPipe implements PipeTransform {
  private timer: any = null;

  constructor() {}

  transform(value: number, type: 'recordState' = 'recordState'): any {
    switch (type) {
      case 'recordState': {
        return `SYSTEM.RECORD.STATUS.${RecordState[value].toUpperCase()}`;
      }

      default: {
        return `SYSTEM.RECORD.STATUS.${RecordState[value].toUpperCase()}`;
      }
    }
  }
}
