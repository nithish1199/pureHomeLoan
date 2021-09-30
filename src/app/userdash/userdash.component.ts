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

 
  constructor(private service:PersonaldetailsService,private route:Router, private router:ActivatedRoute) {}
  ngOnInit(): void {
     this.accountDetails() 
  
      
      //  this.service.accountdetails().subscribe((data: Account[])=>{
      //    this.accounts = data;
      // })  
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
  
  


