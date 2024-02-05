import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlanetComponent } from '../../../entities/components/planet/planet.component';
import { getId } from '../../../shared/utils/getId';
import { Planet } from '../../interfaces/responses';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [PlanetComponent, RouterModule],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent implements OnInit {

  public planets: Planet[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.getPlanets().subscribe((res) => {
      res.results.forEach((item) => {
        this.planets.push(item);
      })
    })
  }

  public getId(str: string) {
    return getId(str);
  }

}
