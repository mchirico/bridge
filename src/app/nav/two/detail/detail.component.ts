import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {SampleService} from '../../../data/sample.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [SampleService]
})
export class DetailComponent implements OnInit {
  id: number;
  name: string;

  constructor(private route: ActivatedRoute,
              private sampleService: SampleService) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          console.log(this.id);
          this.name = this.sampleService.getData(this.id).name;
        }
      );
  }

}
