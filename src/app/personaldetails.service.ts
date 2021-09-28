import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { Personaldetails } from './personaldetails';
import { ErrorHandler } from '@angular/core';
import{HttpClient,HttpHeaders,HttpErrorResponse} from "@angular/common/http";
import{catchError} from 'rxjs/operators';
import { IncomeDetails } from './income-details';
import { LoanDetails } from './loan-details';
@Injectable({
  providedIn: 'root'
})
export class PersonaldetailsService {
  private apiServer="http://localhost:27614/api";
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  personaldetails(priregister:any):Observable<Personaldetails>{
    return this.httpClient.post<Personaldetails>(this.apiServer+'/PersonalDetails/',JSON.stringify(priregister),this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  incomedetails(incomedetails:any):Observable<IncomeDetails>{
    return this.httpClient.post<IncomeDetails>(this.apiServer+'/IncomeDetails/',JSON.stringify(incomedetails),this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
<<<<<<< HEAD
  userlogin(userlog:any):Observable<Personaldetails>{
    return this.httpClient.post<Personaldetails>(this.apiServer+'/UserLogin/',JSON.stringify(userlog),this.httpOptions)
=======
  loandetails(loandetails:any):Observable<LoanDetails>{
    return this.httpClient.post<LoanDetails>(this.apiServer+'/LoanDetails/',JSON.stringify(loandetails),this.httpOptions)
>>>>>>> 5c34454566ae6789a5f13df9cca5e841e0ebc6a8
    .pipe(
      catchError(this.errorHandler)
    )
  }
<<<<<<< HEAD
  
=======
>>>>>>> 5c34454566ae6789a5f13df9cca5e841e0ebc6a8
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
