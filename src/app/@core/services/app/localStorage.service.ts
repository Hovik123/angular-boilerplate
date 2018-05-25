import { environment } from '../../../../environments/environment';

export class LocalStorageService {

  public get(key: string): any {
    return JSON.parse(localStorage.getItem(`${environment.storageKey}-${key}`));
  }

  public add(key: string, data: any): void {
    localStorage.setItem(`${environment.storageKey}-${key}`, JSON.stringify(data));
  }

  public remove(key: string): void {
    localStorage.removeItem(`${environment.storageKey}-${key}`);
  }

  public removeAll(): void {
    localStorage.clear();
  }
}
