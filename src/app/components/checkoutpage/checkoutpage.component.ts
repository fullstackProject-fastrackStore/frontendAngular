import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';
@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.css']
})
export class CheckoutpageComponent implements OnInit {
  grandTotal : number=0 ;
productDetails:any;
  registerForm!: FormGroup;
  submitted!: boolean;
  loggeduser:any;
  public product:any =[];
  constructor(private formBuilder: FormBuilder, private router: Router,private service: RegistrationServiceService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      pincode: ['', Validators.required],
      
    });
    
    this.loggeduser=sessionStorage.getItem("loggedname");
   // this.loggedId =sessionStorage.getItem("userId");
    if(this.loggeduser != null){
      this.service.getCartById(this.loggeduser).subscribe({

        next: (val) => { this.product = val 
        console.log(this.product)},
        error: (val) => { console.log(val) },
  
      }
      )}

      this.product.map((a:any)=>{
        this.grandTotal+=a.price;
       })
           
    }
  
  apply(){

  }
  orderPlaced(){
    alert("order placed successfully!")
    
  }
}
