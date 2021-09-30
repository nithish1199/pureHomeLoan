import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaldetailsService } from '../personaldetails.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  selectedFile!: File;
  constructor(private http: HttpClient, private service: PersonaldetailsService, private route: Router) { }
  username: any;
  application!: FormGroup;
  appid: any
  ngOnInit(): void {
    this.username=sessionStorage.getItem('username')
  }
  onFileSelected(event: any) {
    this.username = sessionStorage.getItem('username')
    this.selectedFile = <File>event.target.files[0];
    console.log('hi')
    console.log(event)
  }
  onUpload() {
    const filedata = new FormData();
    filedata.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:3751/api/documents/' + this.username, filedata)
      .subscribe(res => {
        console.log(res);
      })
   
  }
  submitApp(){
    this.service.GetId(this.username).subscribe(data => {
      this.appid = data
      sessionStorage.setItem('appid', this.appid)
      this.appid=sessionStorage.getItem('appid')
      this.application = new FormGroup({
        LoanID: new FormControl(12233),
        ApplicationID: new FormControl(parseInt(this.appid)),
        status: new FormControl("Pending"),
        ApprovalDate: new FormControl()
      }
      );
      console.log(this.application.value)
      this.service.applicationdetails(this.application.value).subscribe(res => {
        console.log(res)
        console.log("Application details saved!")
      })
      this.route.navigate(['application'])
    })
    
   
    
  }

}
