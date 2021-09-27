import { Chart, RadarController, LineElement, PointElement, Title, RadialLinearScale } from 'chart.js';

import './scss/style.scss';
import $ from "jquery";

const data = {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [6, 5, 9, 8, 5],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'My Second Dataset',
    data: [2, 4, 4, 1, 9],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};

const config = {
  type: "radar",
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    }
  }
};

$(function () {
    Chart.register(RadarController, LineElement, PointElement, RadialLinearScale, Title);
    new Chart($(".character-mainStats--radar-chart").get(), config);
});
