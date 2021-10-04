import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaldetailsService } from './personaldetails.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  message!:boolean
  constructor(private service:PersonaldetailsService,private route:Router){}
  ngOnInit(): void {
    console.log("status="+this.message)
    if(sessionStorage.getItem('USERNAME')!=null || sessionStorage.getItem('ADMINUSERNAME')!=null){
      this.message=true;
    }
    this.service.recievedStatus().subscribe((data)=>{
      this.message=data;
      console.log("status="+this.message)
      });
  }
  title = 'pureHomeLoan';
  logout()
  {
    console.log("hi");
    sessionStorage.removeItem('USERNAME');
    sessionStorage.removeItem('ADMINUSERNAME');
    sessionStorage.clear();
    this.service.subject.next(false);
    //this.message=false;
    this.route.navigate(['user']); 
  } 
}
