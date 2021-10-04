import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { PersonaldetailsService } from '../personaldetails.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {
  accounts!: Account ;

  constructor(private route:Router,private service:PersonaldetailsService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('USERNAME')===null){
      this.route.navigate(['user'])
    }
    this.accountDetails() 
 
  }
    accountDetails(){
    console.log("hi");
    
   this.service.accountdetailsByUserName(this.router.snapshot.params['username']).subscribe((data:Account)=>{
   this.accounts=data;
   console.log(this.accounts)
   console.log(data)
  })  
    }
    logout(){
      this.route.navigate(['Home'])
    } 

}
