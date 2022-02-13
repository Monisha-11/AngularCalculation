import { Component } from "@angular/core";

@Component({
    selector:'Cylinder-Volume',
    templateUrl:'./cylinder.component.html',
    
    
})
export class CylinderComponent{
    radius:number;
    height:number;
    volume:number;
    pi:number;
    constructor(){
        this.radius=10;
        this.height=40;
        this.pi=3.14;
        this.volume=this.pi*this.radius*this.radius*this.height
    }
    onCalculateVol(){
        this.volume=this.pi*this.radius*this.radius*this.height
    }
}