import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserCardComponent } from '../user-card/user-card.component';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../../shared/services/language.service';
import { UserService } from '../../../services/user/user.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-sidenav-content',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    UserCardComponent,
    RouterModule,
    TranslateModule,
    AsyncPipe,
  ],
  templateUrl: './sidenav-content.component.html',
  styleUrl: './sidenav-content.component.less',
})
export class SidenavContentComponent {
  public isAuthenticated$ = this.userService.isAuthenticated$;

  constructor(
    public translate: TranslateService,
    private langService: LanguageService,
    private userService: UserService
  ) {}

  public changeLanguage(lang: 'en' | 'bg'): void {
    this.langService.setLanguage(lang);
    this.translate.use(lang);
  }

  public signIn(): void {
    this.userService.loginWithRedirect();
  }

  public signOut(): void {
    this.userService.signOut();
  }
}
