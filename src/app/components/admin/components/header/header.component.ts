import { Component, OnInit } from '@angular/core';
import {filter, mapTo, merge, Observable} from "rxjs";
import {AuthService} from "../../../../services/auth.service";
import {ActivatedRoute, ResolveEnd, ResolveStart, Router} from "@angular/router";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private _showLoader!: Observable<boolean>;
  private _hideLoader!: Observable<boolean>;

  isLoading!: Observable<boolean>;

  constructor(private authService: AuthService, private adminService: AdminService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._hideLoader = this.router.events.pipe(filter((e) => e instanceof ResolveEnd), mapTo(false));

    this._showLoader = this.router.events.pipe(filter((e) => e instanceof ResolveStart), mapTo(true));

    this.isLoading = merge(this._hideLoader, this._showLoader);
  }

  logout() {
    this.authService.logout();
  }
}
