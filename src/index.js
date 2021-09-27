import { Chart, RadarController, LineElement, PointElement, Title, RadialLinearScale } from 'chart.js';

import './scss/style.scss';
import $ from "jquery";
import Paladin from "./paladin.svg";

const data = {
  labels: [
    'Stärke',
    'Geschicklichkeit',
    'Intelligenz',
    'Zurückhaltung',
    'Loyalität',
  ],
  datasets: [{
    label: 'Paladin',
    data: [5, 7, 8, 1, 10],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  },]
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
    let svg = new Image();
    svg.src = Paladin;
    $(".character-avatar").append(svg);
    Chart.register(RadarController, LineElement, PointElement, RadialLinearScale, Title);
    new Chart($(".character-mainStats--radar-chart").get(), config);
});
