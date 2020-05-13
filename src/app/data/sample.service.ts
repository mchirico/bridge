import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  data = [
    {
      id: 0,
      name: 'bob',
      data: 'bob data'
    },
    {
      id: 1,
      name: 'sue',
      data: 'sue data'
    },
    {
      id: 2,
      name: 'tom',
      data: 'tom data'
    },
  ];

  constructor() {
  }

  getData(id: number) {
    const t = id >= this.data.length ? this.data.length - 1 : id;
    console.log(t)
    return this.data[t];
  }
}
