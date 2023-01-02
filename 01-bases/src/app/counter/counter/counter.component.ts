import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    template: `
    <h1> {{ title }} </h1>
    <h3>The base number is: <strong>{{ baseNum }}</strong></h3>

    <button (click)="accumulate(baseNum)">+{{ baseNum }}</button>
    <span>{{ num }}</span>
    <button (click)="accumulate(-baseNum)">-{{ baseNum }}</button>

    <br>
    <br>
    <button (click)="reset()">Reset</button>
    `,
    styleUrls: ['../../app.component.css'],
})
export class CounterComponent {
    public title: string = 'Counter app';
    public num: number = 0;
    public baseNum: number = 5;

    reset(){
        this.num = 0;
    }

    accumulate(value: number){
        this.num += value;
    }
}
