import { Component } from "@angular/core";


@Component({
    selector:'Rectangle-Area',
    templateUrl:'./rectangle.component.html',
    
})

export class RectangleComponent{
    length:number;
    breadth:number;
    area:number;
    constructor(){
        this.length=10;
        this.breadth=20;
        this.area=this.length*this.breadth;
    }
    onCalculate(){
        this.area=this.length*this.breadth
    }
}