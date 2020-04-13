import {Injectable} from '@angular/core';
import {of as observableOf, Observable} from 'rxjs';
import {PeriodsService} from './periods.service';
import {TrafficList, TrafficListData} from '../data/traffic-list';

@Injectable()
export class TrafficListService extends TrafficListData {

  private getRandom = (roundTo: number) => Math.round(Math.random() * roundTo);
  private data = {};
  private dataCustom = {};

  constructor(private period: PeriodsService) {
    super();
    this.data = {
      area: this.getDataWeek(),
      lote: this.getDataMonth(),
      year: this.getDataYear(),
    };

    const areaCustom: TrafficList[] = [
      {
        date: '05/2019',
        value: 3,
        comparison: {
          nextDate: '',
          prevDate: '',
          nextValue: 0,
          prevValue: 0,
        },
        delta: {
          up: true,
          value: 15,
        },
      },
      {
        date: '06/2019',
        value: 6,
        comparison: {
          nextDate: '',
          prevDate: '',
          nextValue: 0,
          prevValue: 0,
        },
        delta: {
          up: true,
          value: 12,
        },
      },
      {
        date: '07/2019',
        value: 4,
        comparison: {
          nextDate: '',
          prevDate: '',
          nextValue: 0,
          prevValue: 0,
        },
        delta: {
          up: false,
          value: 7,
        },
      },
      {
        date: '08/2019',
        value: 8,
        comparison: {
          nextDate: '',
          prevDate: '',
          nextValue: 0,
          prevValue: 0,
        },
        delta: {
          up: true,
          value: 100,
        },
      },
      {
        date: '09/2019',
        value: 7,
        comparison: {
          nextDate: '',
          prevDate: '',
          nextValue: 0,
          prevValue: 0,
        },
        delta: {
          up: false,
          value: 7,
        },
      },
      {
        date: '10/2019',
        value: 5,
        comparison: {
          nextDate: '',
          prevDate: '',
          nextValue: 0,
          prevValue: 0,
        },
        delta: {
          up: false,
          value: 15,
        },
      },
      {
        date: '11/2019',
        value: 5.9,
        comparison: {
          nextDate: '',
          prevDate: '',
          nextValue: 0,
          prevValue: 0,
        },
        delta: {
          up: true,
          value: 13,
        },
      },
      {
        date: '12/2019',
        value: 4,
        comparison: {
          nextDate: '',
          prevDate: '',
          nextValue: 0,
          prevValue: 0,
        },
        delta: {
          up: false,
          value: 20,
        },
      },
      {
        date: '01/2020',
        value: 4.5,
        comparison: {
          nextDate: '',
          prevDate: '',
          nextValue: 0,
          prevValue: 0,
        },
        delta: {
          up: true,
          value: 18,
        },
      },
      {
        date: '02/2020',
        value: 5,
        comparison: {
          nextDate: '',
          prevDate: '',
          nextValue: 0,
          prevValue: 0,
        },
        delta: {
          up: true,
          value: 15,
        },
      },
      {
        date: '03/2020',
        value: 3,
        comparison: {
          nextDate: '',
          prevDate: '',
          nextValue: 0,
          prevValue: 0,
        },
        delta: {
          up: false,
          value: 30,
        },
      },
    ];
    const loteCustom: TrafficList[] = [
      {
        date: '09/2019',
        value: 7,
        comparison: {
          nextDate: '',
          prevDate: '',
          nextValue: 0,
          prevValue: 0,
        },
        delta: {
          up: false,
          value: 7,
        },
      },
      {
        date: '10/2019',
        value: 5,
        comparison: {
          nextDate: '',
          prevDate: '',
          nextValue: 0,
          prevValue: 0,
        },
        delta: {
          up: false,
          value: 15,
        },
      },
      {
        date: '11/2019',
        value: 5.9,
        comparison: {
          nextDate: '',
          prevDate: '',
          nextValue: 0,
          prevValue: 0,
        },
        delta: {
          up: true,
          value: 13,
        },
      },
      {
        date: '12/2019',
        value: 4,
        comparison: {
          nextDate: '',
          prevDate: '',
          nextValue: 0,
          prevValue: 0,
        },
        delta: {
          up: false,
          value: 20,
        },
      },
      {
        date: '01/2020',
        value: 4.5,
        comparison: {
          nextDate: '',
          prevDate: '',
          nextValue: 0,
          prevValue: 0,
        },
        delta: {
          up: true,
          value: 18,
        },
      },
      {
        date: '02/2020',
        value: 5,
        comparison: {
          nextDate: '',
          prevDate: '',
          nextValue: 0,
          prevValue: 0,
        },
        delta: {
          up: true,
          value: 15,
        },
      },
      {
        date: '03/2020',
        value: 3,
        comparison: {
          nextDate: '',
          prevDate: '',
          nextValue: 0,
          prevValue: 0,
        },
        delta: {
          up: false,
          value: 30,
        },
      },
    ];
    this.dataCustom = {
      area: areaCustom,
      lote: loteCustom,
    };


  }

  private getDataWeek(): TrafficList[] {
    const getFirstDateInPeriod = () => {
      const weeks = this.period.getWeeks();

      return weeks[weeks.length - 1];
    };

    return this.reduceData(this.period.getWeeks(), getFirstDateInPeriod);
  }

  private getDataMonth(): TrafficList[] {
    const getFirstDateInPeriod = () => {
      const months = this.period.getMonths();

      return months[months.length - 1];
    };

    return this.reduceData(this.period.getMonths(), getFirstDateInPeriod);
  }

  private getDataYear(): TrafficList[] {
    const getFirstDateInPeriod = () => {
      const years = this.period.getYears();

      return `${parseInt(years[0], 10) - 1}`;
    };

    return this.reduceData(this.period.getYears(), getFirstDateInPeriod);
  }

  private reduceData(timePeriods: string[], getFirstDateInPeriod: () => string): TrafficList[] {
    return timePeriods.reduce((result, timePeriod, index) => {
      const hasResult = result[index - 1];
      const prevDate = hasResult ?
        result[index - 1].comparison.nextDate :
        getFirstDateInPeriod();
      const prevValue = hasResult ?
        result[index - 1].comparison.nextValue :
        this.getRandom(100);
      const nextValue = this.getRandom(100);
      const deltaValue = prevValue - nextValue;

      const item = {
        date: timePeriod,
        value: this.getRandom(1000),
        delta: {
          up: deltaValue <= 0,
          value: Math.abs(deltaValue),
        },
        comparison: {
          prevDate,
          prevValue,
          nextDate: timePeriod,
          nextValue,
        },
      };

      return [...result, item];
    }, []);
  }

  getTrafficListData(period: string): Observable<TrafficList> {
    return observableOf(this.dataCustom[period]);
  }
}
