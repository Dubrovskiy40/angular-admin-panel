import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {map, Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../users";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  personalList!: Observable<User[]>;

  constructor(private _adminService: AdminService, private _router: Router, private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.personalList = this._activatedRoute.data.pipe(map((data) => data?.['users']));
  }
}
