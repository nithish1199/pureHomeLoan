import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibiltycalculator',
  templateUrl: './eligibiltycalculator.component.html',
  styleUrls: ['./eligibiltycalculator.component.css']
})
export class EligibiltycalculatorComponent implements OnInit {

  input3!:number;
  //input3!:number;
  constructor() { }

  ngOnInit(): void {
  }
  getAnswer(){
    var input1=((document.getElementById("num1") as HTMLInputElement).value);
    var input2=((document.getElementById("num2") as HTMLInputElement).value);
    this.input3=60*parseInt(input1)*parseInt(input2);

  }

}
