import { Component, OnInit } from '@angular/core';
import { filter, fromEvent, map, of, pipe, range } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  subscription: any;
  timersubscription: any;

  clientx: number = 0;
  clienty: number = 0;

  timerval: number = 0;
  squares: number[] = [];

  ngOnInit(): void {

    /// Observable from event
    const el = document.getElementById('app-third')!;

    // Create an Observable that will publish mouse movements
    const mouseMoves = fromEvent<MouseEvent>(el, 'mousemove');

    // Subscribe to start listening for mouse-move events
    this.subscription = mouseMoves.subscribe(evt => {
      // Log coords of mouse movements
      console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
      this.clientx = evt.clientX;
      this.clienty = evt.clientY;
    });


    /// Observable from timer
    // Create an Observable that will publish a value on an interval
    const secondsCounter = interval(1000);
    // Subscribe to begin publishing values
    this.timersubscription = secondsCounter.subscribe(n => {
      //console.log(`It's been ${n + 1} seconds since subscribing!`));
      this.timerval = n;
    });
  }

  counter(): void {
    this.squares = [];
    //const nums = of(1, 2, 3);
    const nums = range(1, this.randomNumberBetween(3, 30));

    const squareValues = map((val: number) => val * val);
    const squareFilteredValue = pipe(
      filter((n: number) => n % 3 === 0),
      map(n => n * n)
    );
    const squaredNums = squareFilteredValue(nums);


    squaredNums.subscribe(x => {
      console.log(x);
      this.squares.push(x);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.timersubscription.unsubscribe();
  }

  private randomNumberBetween(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}











