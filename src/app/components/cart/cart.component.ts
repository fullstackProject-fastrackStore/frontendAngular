import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  loggeduser:any;
 loggedId:any;
  public product:any =[];
 // public grandTotal = this.product.price;
  
  constructor(private service: RegistrationServiceService, private router: Router) { }

  ngOnInit(  ): void {
    this.loggeduser=sessionStorage.getItem("loggedname");
   // this.loggedId =sessionStorage.getItem("userId");
    if(this.loggeduser != null){
      this.service.getCartById(this.loggeduser).subscribe({

        next: (val) => { this.product = val 
        console.log(this.product)},
        error: (val) => { console.log(val) },
  
      }
      )
           
    }
    else{
      alert("please login! ");
      this.router.navigate(['/login'])
    }
    
  }
  emptycart(){

  }
  removeItem(item1 :any){
  alert("product removed!");
      this.service.deleteItem(this.loggeduser,item1.productid).subscribe({
        next: (val) => { console.log("item deleted")
         },
        error: (val) => { console.log("deletion failed") },
  
      })
      
      if(this.loggeduser != null){
        this.service.getCartById(this.loggeduser).subscribe({
  
          next: (val) => { this.product = val 
       
            console.log(this.product)},
          error: (val) => { console.log(val) },
    
        }
        )}
        this.router.navigate(['/cart'])
    }}
