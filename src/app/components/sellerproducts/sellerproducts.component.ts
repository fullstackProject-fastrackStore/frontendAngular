import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';

@Component({
  selector: 'app-sellerproducts',
  templateUrl: './sellerproducts.component.html',
  styleUrls: ['./sellerproducts.component.css']
})
export class SellerproductsComponent implements OnInit {
  registerForm!: FormGroup;
  updateFormView: boolean = false;
  productDetails: any
  id:any;
  constructor(private service: RegistrationServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe({

      next: (val) => { this.productDetails = val },
      error: (val) => { console.log(val) },

    }
    )
    this.registerForm = this.formBuilder.group({
      productName: ['', [Validators.required]],
      image: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      
    });
  }
    
    delete(id: number) {
      this.service.deleteStudent(id).subscribe({
        next: (val) => { this.productDetails = val },
        error: (val) => { console.log(val) },
  
      })
      alert("successfully deleted the successfully!")
    }
    //registerProductPage
    addProduct(){
       this.updateFormView = true;
    }
    apply(){
//registerProduct
      this.service.registerProduct(this.registerForm.value).subscribe({
        next(value) {}
     })
     alert("product added to the list");
     this.updateFormView=false;
    }
  }
