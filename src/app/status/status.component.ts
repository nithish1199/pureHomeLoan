import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationDetails } from '../application-details';
import { LoanDetails } from '../loan-details';
import { PersonaldetailsService } from '../personaldetails.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  status!:ApplicationDetails;
  //applicationID!:ApplicationDetails
  constructor(private service:PersonaldetailsService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.Status()
  }
  Status(){
    this.service.statusByApplicationId(this.router.snapshot.params['applicationId']).subscribe((res:ApplicationDetails)=>{
     this.status=res;
     console.log(this.status)
     console.log(res)
    }) 
   }

}
