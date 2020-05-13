import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {
  m = 0;
  private obsSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    this.obsSubscription = interval(1000).subscribe((count) => {
      this.m = count;
      console.log(count);
    });
  }

  ngOnDestroy(){
    this.obsSubscription.unsubscribe();
  }
}
