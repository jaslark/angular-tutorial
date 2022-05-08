import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../user.service';
import { DialogComponent } from './dialog/dialog.component';
import { MatIconRegistry } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  selectedUser: User = new User;
  name: string;
  bs: string;
  email: string;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private userService: UserService, private dialog: MatDialog) {
    const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');
    iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
  }

  public ngOnInit(): void {
    this.userService.getUsers().subscribe(
      users => {
        this.users = users;
        this.selectedUser = this.users[0];
      }
    );
  }

  public openAdminDialog() {
    this.dialog.open(DialogComponent).afterClosed()
      .subscribe(user => {
        if (!user?.name || !user?.bs) {
          return;
        }

        this.users.push({
          id: this.users.length + 1,
          name: user.name,
          bs: user.bs,
          avatar: 'svg-6',
          email: user.email
        });
        this.selectedUser = user;
        this.userService.addUser(user).subscribe();
      });
  }

}
