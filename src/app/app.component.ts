import { Component, OnInit } from '@angular/core';
import { WeatherDashboardService } from '../services/weatherDashboard.service';
import CanvasJS from '../assets/canvasJS.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weatherdashb';

  location = {cityName: 'Obregon', countryCode: 'mx'};
  weather = undefined;
  show: boolean = true;

  constructor(private weatherService: WeatherDashboardService) { }

  ngOnInit() {
    this.getWeatherC(this.location.cityName, this.location.countryCode)
  }

  getWeatherF(cityName: string, countryCode: string){
    
    this.weatherService
    .getWeatherFar(cityName, countryCode)
    .subscribe(
      res => {
        this.show = false;

        let chart = new CanvasJS.Chart("chartContainer", {
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: `Forecast for: ${this.weather.city_name}`
          },
          data: [{
            type: "line",
            dataPoints: [
              { y: this.weather.data[0].temp , label: this.weather.data[0].datetime },
                { y: this.weather.data[1].temp , label: this.weather.data[1].datetime },
                { y: this.weather.data[2].temp , label: this.weather.data[2].datetime },
                { y: this.weather.data[3].temp , label: this.weather.data[3].datetime },
                { y: this.weather.data[4].temp , label: this.weather.data[4].datetime },
                { y: this.weather.data[5].temp , label: this.weather.data[5].datetime },
                { y: this.weather.data[6].temp , label: this.weather.data[6].datetime },
                { y: this.weather.data[7].temp , label: this.weather.data[7].datetime },
                { y: this.weather.data[8].temp , label: this.weather.data[8].datetime },
                { y: this.weather.data[9].temp , label: this.weather.data[9].datetime },
                { y: this.weather.data[10].temp , label: this.weather.data[10].datetime },
                { y: this.weather.data[11].temp , label: this.weather.data[11].datetime },
                { y: this.weather.data[12].temp , label: this.weather.data[12].datetime },
                { y: this.weather.data[13].temp , label: this.weather.data[13].datetime },
                { y: this.weather.data[14].temp , label: this.weather.data[14].datetime },
            ]
          }]
        });
        chart.render();
      },
    );

  }
  getWeatherC(cityName: string, countryCode: string) {
    this.weatherService
    .getWeatherCel(cityName, countryCode)
    .subscribe(
      res => {
        this.weather = res;
        this.show = true;

        let chart = new CanvasJS.Chart("chartContainer", {
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: `Forecast for: ${this.weather.city_name}`
          },
          data: [{
            type: "line",
            dataPoints: [
              { y: this.weather.data[0].temp , label: this.weather.data[0].datetime },
              { y: this.weather.data[1].temp , label: this.weather.data[1].datetime },
              { y: this.weather.data[2].temp , label: this.weather.data[2].datetime },
              { y: this.weather.data[3].temp , label: this.weather.data[3].datetime },
              { y: this.weather.data[4].temp , label: this.weather.data[4].datetime },
              { y: this.weather.data[5].temp , label: this.weather.data[5].datetime },
              { y: this.weather.data[6].temp , label: this.weather.data[6].datetime },
              { y: this.weather.data[7].temp , label: this.weather.data[7].datetime },
              { y: this.weather.data[8].temp , label: this.weather.data[8].datetime },
              { y: this.weather.data[9].temp , label: this.weather.data[9].datetime },
              { y: this.weather.data[10].temp , label: this.weather.data[10].datetime },
              { y: this.weather.data[11].temp , label: this.weather.data[11].datetime },
              { y: this.weather.data[12].temp , label: this.weather.data[12].datetime },
              { y: this.weather.data[13].temp , label: this.weather.data[13].datetime },
              { y: this.weather.data[14].temp , label: this.weather.data[14].datetime },
            ]
          }]
        });
        chart.render();
      }
    );
  }
}
