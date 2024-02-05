import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';

interface Navigation {
  title: string;
  link: string;
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  providers: []
})
export class NavigationComponent {

  public navigation: Navigation[] = []

  constructor(private _dataService: DataService) {
    this._dataService.getNavigation().subscribe((res) => {
      Object.keys(res).forEach((key: string) => {
        this.navigation.push({
          title: key,
          link: `/${key}`
        });
      })
    })
  }

}
