import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, Observable, take } from 'rxjs';
import { MarbleData } from 'src/app/models/common.types';
import { AbstractOperatorPage } from 'src/app/models/operator-page.model';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['../../operator-page.scss'],
})
export class IntervalComponent extends AbstractOperatorPage {
  override inputs: Observable<MarbleData>[] = [];
  override outputs: Observable<MarbleData>[] = [
    this.marbleCreateService.convertToColoredObservable(
      interval(1000).pipe(take(100)),
      'random'
    ),
  ];
  override operatorSample: string = 'interval(1000)';
}
