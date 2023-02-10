import { Component } from '@angular/core';
import { alphabet$ } from '@core/models/constants/observables';
import { concat, map, merge, range, take, zip } from 'rxjs';
import { OPERATOR_STYLE_PATH } from 'src/app/core/models/constants/common';
import { OperatorSource } from 'src/app/core/models/types/operators';
import { AbstractOperatorPage } from '../../../components/operator-page/operator-page';

@Component({
  selector: 'app-interval',
  templateUrl: './merge.component.html',
  styleUrls: [OPERATOR_STYLE_PATH],
})
export class MergeComponent extends AbstractOperatorPage {
  override sources: OperatorSource[] = [
    {
      inputs: [
        this.marbleCreateService.convertToColoredObservable(
          zip(range(1, 3), this.randomTickService.randomTick1$).pipe(
            map(([num]) => num)
          ),
          'red'
        ),
        this.marbleCreateService.convertToColoredObservable(
          zip(
            alphabet$.pipe(take(3)),
            this.randomTickService.randomTick2$
          ).pipe(map(([num]) => num)),
          'blue'
        ),
      ],
      outputs: [],
    },
  ];

  override ngOnInit(): void {
    this.sources[0].outputs.push(
      merge(this.sources[0].inputs[0], this.sources[0].inputs[1])
    );
  }
}
