import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit, OnDestroy {
  private obsSubscription: Subscription;
  counter: number;

  constructor() {
  }

  ngOnInit(): void {
    this.obsSubscription = interval(1000).subscribe((count) => {
      this.counter = count;
      console.log(count);
    });
  }

  ngOnDestroy(): void {
    this.obsSubscription.unsubscribe()
  }
}
