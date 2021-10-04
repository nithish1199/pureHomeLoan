import { Injectable } from '@angular/core';
import { Observable,Subject,throwError } from 'rxjs';
import { Personaldetails } from './personaldetails';
import { ErrorHandler } from '@angular/core';
import{HttpClient,HttpHeaders,HttpErrorResponse} from "@angular/common/http";
import{catchError} from 'rxjs/operators';
import { IncomeDetails } from './income-details';
import { LoanDetails } from './loan-details';
import { ApplicationDetails } from './application-details';
import { Account } from './account';
import { DisplayDetails } from './display-details';
@Injectable({
  providedIn: 'root'
})
export class PersonaldetailsService {
  public subject=new Subject<boolean>();
  userlogin(value: any) {
    throw new Error('Method not implemented.');
  }
  private apiServer="http://localhost:3751/api";
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  recievedStatus():Observable<boolean>
  {
    return this.subject.asObservable();
  }
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
  GetLoanDetails():Observable<LoanDetails[]>{return this.httpClient.get<LoanDetails[]>(this.apiServer+'/LoanDetails/display')}

  loandetails(loandetails:any):Observable<LoanDetails>{
    return this.httpClient.post<LoanDetails>(this.apiServer+'/LoanDetails/',JSON.stringify(loandetails),this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  //  accountdetails():Observable<Account[]>{
  //    return this.httpClient.get<Account[]>(this.apiServer+'/UserDashBoard/')
  // }
   accountdetailsByUserName(username: any):Observable<Account>{
    return this.httpClient.get<Account>(this.apiServer+'/AccountDetails/'+username)
   }

  login(register:Personaldetails){
    return this.httpClient.post(this.apiServer + '/PersonalDetails/login/', JSON.stringify(register), this.httpOptions)
    
  } 
  adminlogin(adlogin:Personaldetails){
    return this.httpClient.post(this.apiServer + '/AdminDetails/adminlogin/', JSON.stringify(adlogin), this.httpOptions) 
  } 
  GetId(name:string){
    return this.httpClient.get<number>(this.apiServer+'/LoanDetails/'+name);
  }
  applicationdetails(application:any):Observable<ApplicationDetails>{
    return this.httpClient.post<ApplicationDetails>(this.apiServer+'/ApplicationDetails/',JSON.stringify(application),this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  GetDetailsByApplicationID(id:number){
    return this.httpClient.get<LoanDetails>(this.apiServer+'/LoanDetails/get1/'+id);
  }
  GetDetailsByApplicationId(id:number){
    return this.httpClient.get<Personaldetails>(this.apiServer+'/LoanDetails/get1/'+id);
  }
  approveData(id:number,loandetails:LoanDetails){
    return this.httpClient.put(this.apiServer+'/LoanDetails/put/'+id,JSON.stringify(loandetails),this.httpOptions);
   }
   rejectData(id:number,loandetails:LoanDetails){
    return this.httpClient.put(this.apiServer+'/LoanDetails/putreject/'+id,JSON.stringify(loandetails),this.httpOptions);
   }

   
   getincomedetails(id:number){
    return this.httpClient.get<IncomeDetails>(this.apiServer+'/LoanDetails/income/'+id);
   }

   getrejected():Observable<DisplayDetails[]>{
     return this.httpClient.get<DisplayDetails[]>(this.apiServer+'/LoanDetails/rejected')
   }

   getapproved():Observable<DisplayDetails[]>{
     return this.httpClient.get<DisplayDetails[]>(this.apiServer+'/LoanDetails/approved')
   }
   trackLoan(applicationId:any){
    return this.httpClient.post(this.apiServer+'/LoanTracker/Track',JSON.stringify(applicationId),this.httpOptions)
  }

  statusByApplicationId(applicationId:any):Observable<ApplicationDetails>{
    return this.httpClient.get<ApplicationDetails>(this.apiServer+'/LoanTracker/'+applicationId)
  }



  

  


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
