import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})


export class CustomerService {

  Custdetails = [
    {
      'CustomerID' : '1',
      'Name':'Srujana',
      'Email':'Srujana@gmail.com',
      'DateOfBirth':'16/03/1999',
      'PhoneNumber':'1234567890',
      'Address1':'M.I.G 40/2, H.B.Colony',
      'Address2':'Bhavanipuram',
      'City':'Vijayawada',
      'State':'AP',
      'Country':'India',
      'ZipCode':'520012',
      'MaritalStatus':'Single'
    },
    {
      'CustomerID' : '2',
      'Name':'Navya',
      'Email':'Navya@gmail.com',
      'DateOfBirth':'13/09/1998',
      'PhoneNumber':'1234567800',
      'Address1':'H.I.G 80/3/12, Singanagar',
      'Address2':'Madhapur',
      'City':'Hyderabad',
      'State':'Telangana',
      'Country':'India',
      'ZipCode':'520521',
      'MaritalStatus':'Single'
    },
    {
      'CustomerID' : '3',
      'Name':'Alexa',
      'Email':'Alexa@gmail.com',
      'DateOfBirth':'19/12/2008',
      'PhoneNumber':'9987612340',
      'Address1':'ward no-9, tumkur',
      'Address2':'Hillcity',
      'City':'Bangalore',
      'State':'Karnataka',
      'Country':'India',
      'ZipCode':'520543',
      'MaritalStatus':'Married'
    },
    {
      'CustomerID' : '4',
      'Name':'Maya',
      'Email':'Maya@gmail.com',
      'DateOfBirth':'01/01/2001',
      'PhoneNumber':'9980012440',
      'Address1':'abc-12/54, Phoneix',
      'Address2':'Garden Grove',
      'City':'Agra',
      'State':'UttarPradesh',
      'Country':'India',
      'ZipCode':'345521',
      'MaritalStatus':'Single'
    },
    {
      'CustomerID' : '5',
      'Name':'Sri',
      'Email':'Sri@gmail.com',
      'DateOfBirth':'21/12/1985',
      'PhoneNumber':'9988877331',
      'Address1':'L.I.G 56/3, straight way',
      'Address2':'xyz1',
      'City':'Ahmedabad',
      'State':'Gujarat',
      'Country':'India',
      'ZipCode':'765521',
      'MaritalStatus':'Married'
    },
    {
      'CustomerID' : '6',
      'Name':'Jessi',
      'Email':'Jessi@gmail.com',
      'DateOfBirth':'14/08/2014',
      'PhoneNumber':'9952342340',
      'Address1':'XYZ 40/2/31, Douglas',
      'Address2':'southampton',
      'City':'Arizona',
      'State':'Cleveland',
      'Country':'US',
      'ZipCode':'527777',
      'MaritalStatus':'Married'
    }

  ]


  addDetailURL: string;
  getDetailURL: string;
  updateDetailURL: string;
  deleteDetailURL: string;

  constructor(private http: HttpClient) { 
    this.addDetailURL = 'http://localhost:3000/customer/addCustomer';
    this.getDetailURL = 'http://localhost:3000/customer/getAllCustomer';
    this.updateDetailURL = 'http://localhost:3000/customer/updateCustomer';
    this.deleteDetailURL = 'http://localhost:3000/customer/deleteCustomer';
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.addDetailURL, Customer);
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.getDetailURL);
  }

  // updateCustomer(customer:Customer): Observable<Customer> {
  //   return this.http.put<Customer>(this.updateDetailURL, Customer);
  // }

  // deleteCustomer(customer: Customer): Observable<Customer> {
  //   return this.http.delete<Customer>(this.deleteDetailURL + '/' + Customer);
  // }

}



