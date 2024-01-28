import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  user = new User();
  transactions = new Array();

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('userdetails') || "");
    if(this.user){
      this.dashboardService.getAccountTransactions(this.user.id).subscribe(
        responseData => {
        this.transactions = <any> responseData.body;
        });
    }
  }

}
