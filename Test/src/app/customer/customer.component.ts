import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Customer } from '../customer';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})


export class CustomerComponent implements OnInit {

  CustomerDetail!: FormGroup;
  CustomerObj: Customer = new Customer();
  CustomerList: Customer[] = [];
  CustomerDetails: { CustomerID: string; Name: string; Email: string; DateOfBirth: string; PhoneNumber: string; Address1: string; Address2: string; City: string; State: string; Country: string; ZipCode: string; MaritalStatus: string; }[] = [];


constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService
  ) {}


// Details:any= {
//   CustomerID:"1",Name:"Srujana",Email:"srujana@jkt.com",DateOfBirth:"16/03/1999",PhoneNumber:"1234567890",Address1:"M.I.G 40/2, H.B.Colony",Address2:"Bhavanipuram",City:"Vijayawada",State:"AP",Country:"India",ZipCode:"520012",MaritalStatus:"Single"}
  // {CustomerID:"2",Name:"Alexa",Email:"Alexa@jkt.com",DateOfBirth:"21/09/1996",PhoneNumber:"9876543210",Address1:"H.I.G 80/3/12, Singanagar",Address2:"Madhapur",City:"Hyderabad",State:"Telangana",Country:"India",ZipCode:"520521",MaritalStatus:"Married"},
  // {CustomerID:"3",Name:"Maya",Email:"Maya@jkt.com",DateOfBirth:"01/12/1989",PhoneNumber:"9812345621",Address1:"ward no-9, tumkur",Address2:"Hillcity",City:"Bangalore",State:"Karnataka",Country:"India",ZipCode:"581312",MaritalStatus:"Married"},
  // {CustomerID:"4",Name:"Sri",Email:"Sri@jkt.com",DateOfBirth:"16/01/2017",PhoneNumber:"9345263109",Address1:"abc-12/54, Phoneix",Address2:"Garden Grove",City:"Agra",State:"UP",Country:"India",ZipCode:"602341",MaritalStatus:"Single"},
  // {CustomerID:"5",Name:"Jessi",Email:"Jessi@jkt.com",DateOfBirth:"31/08/2015",PhoneNumber:"9234156791",Address1:"L.I.G 56/3, straight way",Address2:"xyz1",City:"Ahmedabad",State:"Gujarath",Country:"India",ZipCode:"520012",MaritalStatus:"Single"},
  // {CustomerID:"6",Name:"Navya",Email:"Navya@jkt.com",DateOfBirth:"05/03/1875",PhoneNumber:"9123439034",Address1:"XYZ 40/2/31, Douglas",Address2:"southampton",City:"Arizona",State:"Cleveland",Country:"US",ZipCode:"523418",MaritalStatus:"Married"}


//   ngOnInit(): void {
//     this.getAllCustomer();
//     this.CustomerDetail = this.formBuilder.group({
//       CustomerID: [''],
//       Name: [''],
//       PhoneNumber: [''],
//       Email: [''],
//       DOB: [''],
//       city: [''],
//       state: [''],
//       Country: [''],
//       address1: [''],
//       address2: [''],
//       ZipCode: [''],
//       MaritalStatus: [''],
//     });
// }

ngOnInit(): void {
this.CustomerDetails = this.customerService.Custdetails;
console.log(this.CustomerDetails)

 }



 addCustomer() {
    console.log(this.CustomerDetail);
    this.CustomerObj.CustomerID = this.CustomerDetail.value.CustomerID;
    this.CustomerObj.Name = this.CustomerDetail.value.Name;
    this.CustomerObj.PhoneNumber = this.CustomerDetail.value.PhoneNumber;
    this.CustomerObj.Email = this.CustomerDetail.value.Email;
    this.CustomerObj.DOB = this.CustomerDetail.value.DOB;
    this.CustomerObj.city = this.CustomerDetail.value.city;
    this.CustomerObj.state = this.CustomerDetail.value.state;
    this.CustomerObj.Country = this.CustomerDetail.value.Country;
    this.CustomerObj.Address1 = this.CustomerDetail.value.address1;
    this.CustomerObj.Address2 = this.CustomerDetail.value.address2;
    this.CustomerObj.ZipCode = this.CustomerDetail.value.zipcode;
    this.CustomerObj.MaritalStatus = this.CustomerDetail.value.maritalstatus;



    this.customerService.addCustomer(this.CustomerObj).subscribe(
      (res) => {
        console.log(res);
        this.getAllCustomer();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getAllCustomer() {
    this.customerService.getAllCustomer().subscribe(
      (res) => {
        this.CustomerList = res;
      },
      (err) => {
        console.log('Error while fetching data');
      }
    );
  }

  // editCustomer(customer: Customer) {
  //   this.CustomerDetail.controls['CustomerID'].setValue(customer.CustomerID);
  //   this.CustomerDetail.controls['Name'].setValue(customer.Name);
  //   this.CustomerDetail.controls['PhoneNumber'].setValue(customer.PhoneNumber);
  //   this.CustomerDetail.controls['Email'].setValue(customer.Email);
  //   this.CustomerDetail.controls['DOB'].setValue(customer.DOB);
  //   this.CustomerDetail.controls['city'].setValue(customer.city);
  //   this.CustomerDetail.controls['state'].setValue(customer.state);
  //   this.CustomerDetail.controls['country'].setValue(customer.Country);
  //   this.CustomerDetail.controls['address1'].setValue(customer.Address1);
  //   this.CustomerDetail.controls['address2'].setValue(customer.Address2);
  //   this.CustomerDetail.controls['ZipCode'].setValue(customer.ZipCode);
  //   this.CustomerDetail.controls['MaritalStatus'].setValue(customer.MaritalStatus);
  // }

  // updateCustomer() {
  //   this.CustomerObj.CustomerID = this.CustomerDetail.value.CustomerID;
  //   this.CustomerObj.Name = this.CustomerDetail.value.Name;
  //   this.CustomerObj.PhoneNumber = this.CustomerDetail.value.PhoneNumber;
  //   this.CustomerObj.Email = this.CustomerDetail.value.Email;
  //   this.CustomerObj.DOB = this.CustomerDetail.value.DOB;
  //   this.CustomerObj.city = this.CustomerDetail.value.city;
  //   this.CustomerObj.state = this.CustomerDetail.value.state;
  //   this.CustomerObj.Country = this.CustomerDetail.value.Country;
  //   this.CustomerObj.Address1 = this.CustomerDetail.value.address1;
  //   this.CustomerObj.Address2 = this.CustomerDetail.value.address2;
  //   this.CustomerObj.ZipCode = this.CustomerDetail.value.zipcode;
  //   this.CustomerObj.MaritalStatus = this.CustomerDetail.value.maritalstatus;

  //   this.customerService.updateCustomer(this.CustomerObj).subscribe(
  //     (res) => {
  //       console.log(res);
  //       this.getAllCustomer();
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  // deleteCustomer(customer: Customer) {
  //   this.customerService.deleteCustomer(customer).subscribe(
  //     (res) => {
  //       console.log(res);
  //       alert('Customer Deleted Successfully');
  //       this.getAllCustomer();
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

}




