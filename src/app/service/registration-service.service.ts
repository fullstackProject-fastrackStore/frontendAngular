import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {
  //public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  constructor(private http: HttpClient) { }

  registerUser(user1:any):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:8082/api/registerUser', user1, { headers: options });
  }
//registerProduct
registerProduct(product:any):Observable<any>{
  const options = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post('http://localhost:8082/api/registerProduct', product, { headers: options });
}


  getProducts(){
    const httpOptions = {
      headers: new HttpHeaders(
      { 
         
         'Content-Type': 'application/json'
      })
  }
    return this.http.get('http://localhost:8082/api/getAllProducts',httpOptions);
}
//not correct....!
// addToCart(item:any):Observable<any>{
//   const options = new HttpHeaders({ 'Content-Type': 'application/json' });
//   return this.http.post('http://localhost:8082/api/addToCart/',item);


// }
addToCart(userId : number,productid : number){
  const httpOptions = {
    headers: new HttpHeaders(
    { 
       'Content-Type': 'application/json'
    })
}
  return this.http.post('http://localhost:8082/api/addToCart/'+userId+"/"+productid,httpOptions);
}
  getProductsById(id : number){
    const httpOptions = {
      headers: new HttpHeaders(
      { 
         'Content-Type': 'application/json'
      })
  }
    return this.http.get('http://localhost:8082/api/getProduct/'+id);
      
  }

  deleteStudent(productid : number){
    return this.http.delete('http://localhost:8082/api/deleteProduct/'+productid);
  }
  update(productid :number,product :any){
    console.log(productid);
    
    return this.http.put('http://localhost:8082/api/updateProduct/'+productid,product);
}
login(user1:any):Observable<any>{
  const options = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post('http://localhost:8082/api/login', user1);
}
getCartById(id : number){
  const httpOptions = {
    headers: new HttpHeaders(
    { 
       'Content-Type': 'application/json'
    })
}
  return this.http.get('http://localhost:8082/api/getCart/'+id);
    
}
///deleteProduct/
deleteItem(userId : number,productid : number){
  return this.http.delete('http://localhost:8082/api/deleteItem/'+userId+"/"+productid);
}

adminlogin(user1:any):Observable<any>{
  const options = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post('http://localhost:8082/api/adminlogin', user1);
}
}

