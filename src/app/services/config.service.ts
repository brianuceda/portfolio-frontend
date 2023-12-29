import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor() {}

  public get githubClientId(): string | any {
    return environment.production
      ? process.env['GITHUB_CLIENT_ID']
      : environment.GITHUB_CLIENT_ID;
  }

  public get githubClientSecret(): string | any {
    return environment.production
      ? process.env['GITHUB_CLIENT_SECRET']
      : environment.GITHUB_CLIENT_SECRET;
  }

  public createDialogConfig(
    width: string,
    height: string,
    disableClose?: boolean,
    closeOnNavigation?: boolean,
    data?: any
  ): MatDialogConfig {
    const config = new MatDialogConfig();
    config.disableClose = disableClose || false;
    config.autoFocus = true;
    config.closeOnNavigation = closeOnNavigation || false;
    config.width = width || '1080px';
    config.height = height || '650px';
    config.enterAnimationDuration = 300;
    config.exitAnimationDuration = 300;
    config.data = data || null;
    return config;
  }
}