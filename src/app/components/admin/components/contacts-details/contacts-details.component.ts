import { Component, OnInit } from '@angular/core';
import {map, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {AdminService} from "../../services/admin.service";
import {User} from "../../users";

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements OnInit {

  id!: number;
  user!: Observable<User>;

  constructor(private _activatedRoute: ActivatedRoute, private _adminService: AdminService) {
  }

  ngOnInit(): void {
    this.user = this._activatedRoute.data.pipe(map((data) => data?.['user'] ))
  }
}
