import { Component } from "@angular/core";

@Component({
    selector: "data-binding",
    templateUrl: "./databinding.component.html"
})
export class DatabindingComponent{
    
    name: string;
    count: number;
    message: string;

    constructor(){
        this.name = "Anil Joseph";
        this.count = 5;
        this.message = "Hello";

        const handle = setInterval(() => {

            this.count++
            if(this.count > 10){
                clearInterval(handle);
            }
        
        }, 2000);
    }

    increment(evt: any){

        console.log(evt)
        this.count++;
        this.message += this.count;
    }
}