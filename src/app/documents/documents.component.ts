import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PersonaldetailsService } from '../personaldetails.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  selectedFile!: File;
  constructor(private http: HttpClient, private service: PersonaldetailsService) { }
  username:string="Nithish";
  ngOnInit(): void {
  }
  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    console.log('hi')
    console.log(event)
  }
  onUpload() {
    const filedata = new FormData();
    filedata.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:3751/api/documents/'+this.username, filedata)
      .subscribe(res => {
        console.log(res);
      })

  }

}
