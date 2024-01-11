import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserCardComponent } from '../user-card/user-card.component';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../../shared/services/language.service';

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
  ],
  templateUrl: './sidenav-content.component.html',
  styleUrl: './sidenav-content.component.less',
})
export class SidenavContentComponent {
  constructor(
    public translate: TranslateService,
    private langService: LanguageService
  ) {}

  public changeLanguage(lang: 'en' | 'bg'): void {
    this.langService.setLanguage(lang);
    this.translate.use(lang);
  }
}
