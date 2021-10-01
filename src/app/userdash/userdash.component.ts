import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('USERNAME')===null){
      this.route.navigate(['user'])
    }
  }

}
