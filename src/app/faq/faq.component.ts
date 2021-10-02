import { Component, OnInit } from '@angular/core';
import { PersonaldetailsService } from '../personaldetails.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  message!:boolean
  constructor(private service:PersonaldetailsService) { }

  ngOnInit(): void {
    console.log("hello")
    if(sessionStorage.getItem('username')!==null){
      this.service.recievedStatus().subscribe((data)=>{
        this.message=data;
        console.log("status"+this.message)
        });
    }
    else{
      console.log("status"+this.message)
    }
  }

}
