import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibiltycalculator',
  templateUrl: './eligibiltycalculator.component.html',
  styleUrls: ['./eligibiltycalculator.component.css']
})
export class EligibiltycalculatorComponent implements OnInit {

  input1!:number;
  input2!:number;
  input3!:number;
  constructor() { }

  ngOnInit(): void {
  }
  getAnswer(){
    this.input3=60*(this.input2*this.input1);

  }

}
