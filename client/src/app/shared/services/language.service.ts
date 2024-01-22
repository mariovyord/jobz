import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../../core/services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService extends LocalStorageService {
  public getLanguage(): 'en' | 'bg' | null {
    return this.get<'en' | 'bg'>('lang');
  }

  public setLanguage(language: 'bg' | 'en'): void {
    this.set<'en' | 'bg'>('lang', language);
  }
}
