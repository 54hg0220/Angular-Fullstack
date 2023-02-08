import { Component,OnInit } from '@angular/core';
import { Employee } from '../employee';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  
  employees: Employee[];

  ngOnInit(): void {
    this.getEmployees();
  }
  
  constructor(private employeesService:EmployeeService){
  }

  getEmployees(){
    this.employeesService.getEmployeesList().subscribe(data => {
      this.employees =data;
    })
  }
  
}
